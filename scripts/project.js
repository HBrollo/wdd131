// Get last modified date
const currentyear = new Date().getFullYear();
const yearEl = document.getElementById('currentyear');
if (yearEl) yearEl.textContent = currentyear;

const lastModifiedEl = document.getElementById('lastmodified');
if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;

// ===== Shared DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', function () {

    // ========== Goals ==========
    const goalForm = document.getElementById('goalForm');
    const goalList = document.querySelector('.goal-list');
    const MAX_GOALS = 6;
    let storedGoals = [];

    if (goalList) {
        storedGoals = JSON.parse(localStorage.getItem('goals')) || [];
        storedGoals.forEach(renderGoalCard);
        updateGoalMessageVisibility();
    }

    if (goalForm && goalList) {
        goalForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (storedGoals.length >= MAX_GOALS) {
                alert(`You can only have up to ${MAX_GOALS} goals.`);
                return;
            }

            const goalName = document.getElementById('goal').value.trim();
            const totalSteps = parseInt(document.getElementById('counter').value);

            if (!goalName || isNaN(totalSteps) || totalSteps <= 0) {
                alert('Please provide valid input.');
                return;
            }

            const newGoal = {
                goalName,
                totalSteps,
                currentStep: 0
            };

            storedGoals.push(newGoal);
            localStorage.setItem('goals', JSON.stringify(storedGoals));

            renderGoalCard(newGoal);
            updateGoalMessageVisibility();

            goalForm.reset();
        });
    }

    function renderGoalCard(goal) {
        const card = document.createElement('div');
        card.classList.add('goal-item');

        const title = document.createElement('h3');
        title.textContent = goal.goalName;

        const progress = document.createElement('p');
        progress.textContent = `Progress: ${goal.currentStep} / ${goal.totalSteps}`;

        const stepBtn = document.createElement('button');
        stepBtn.textContent = '+1 Step';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.title = 'Remove goal';

        // Step logic
        stepBtn.addEventListener('click', () => {
            if (goal.currentStep < goal.totalSteps) {
                goal.currentStep++;
                progress.textContent = `Progress: ${goal.currentStep} / ${goal.totalSteps}`;
                if (goal.currentStep === goal.totalSteps) {
                    stepBtn.disabled = true;
                    stepBtn.textContent = 'Completed!';
                }
                localStorage.setItem('goals', JSON.stringify(storedGoals));
            }
        });

        // Delete logic
        deleteBtn.addEventListener('click', () => {
            card.remove();
            storedGoals = storedGoals.filter(g => g.goalName !== goal.goalName);
            localStorage.setItem('goals', JSON.stringify(storedGoals));
            updateGoalMessageVisibility();
        });

        if (goal.currentStep === goal.totalSteps) {
            stepBtn.disabled = true;
            stepBtn.textContent = 'Completed!';
        }

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('goal-buttons');
        btnContainer.appendChild(stepBtn);
        btnContainer.appendChild(deleteBtn);

        card.appendChild(title);
        card.appendChild(progress);
        card.appendChild(btnContainer);
        goalList.appendChild(card);
    }

    function updateGoalMessageVisibility() {
        const noGoalsMsg = document.querySelector('.no-goals-message');
        if (noGoalsMsg) {
            noGoalsMsg.style.display = storedGoals.length === 0 ? 'block' : 'none';
        }
    }

    // ========== Plans ==========
    const planForm = document.getElementById('plan-form');
    const scheduleBody = document.getElementById('schedule-body');
    let storedSchedule = [];

    if (scheduleBody) {
        try {
            storedSchedule = JSON.parse(localStorage.getItem('schedule')) || [];
        } catch (err) {
            console.error("Error parsing schedule:", err);
            localStorage.removeItem('schedule');
        }

        renderSortedSchedule();
    }

    if (planForm && scheduleBody) {
        planForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const plan = document.getElementById('plan').value.trim();
            const timeStart = document.getElementById('time-start').value;
            const timeEnd = document.getElementById('time-end').value;
            const activityType = document.getElementById('activity-type').value;

            if (!plan || !timeStart || !timeEnd || !activityType) {
                alert('Please fill out all fields.');
                return;
            }

            const newEntry = { plan, timeStart, timeEnd, activityType };
            storedSchedule.push(newEntry);
            localStorage.setItem('schedule', JSON.stringify(storedSchedule));

            renderSortedSchedule();
            planForm.reset();
        });
    }

    function renderSortedSchedule() {
        storedSchedule.sort((a, b) => a.timeStart.localeCompare(b.timeStart));
        scheduleBody.innerHTML = '';
        storedSchedule.forEach(addScheduleRow);
        updatePlanMessageVisibility();
    }

    function addScheduleRow(item) {
        const row = document.createElement('tr');
        row.classList.add(item.activityType);

        row.innerHTML = `
            <td>${item.plan}</td>
            <td>${item.timeStart}</td>
            <td>${item.timeEnd}</td>
            <td>${capitalize(item.activityType)}</td>
            <td><button class="delete-schedule">Delete</button></td>
        `;

        row.querySelector('.delete-schedule').addEventListener('click', () => {
            storedSchedule = storedSchedule.filter(entry =>
                !(entry.plan === item.plan && entry.timeStart === item.timeStart && entry.timeEnd === item.timeEnd)
            );
            localStorage.setItem('schedule', JSON.stringify(storedSchedule));
            renderSortedSchedule();
        });

        scheduleBody.appendChild(row);
    }

    function updatePlanMessageVisibility() {
        const noPlansMsg = document.querySelector('.no-plans-message');
        if (noPlansMsg) {
            noPlansMsg.style.display = storedSchedule.length === 0 ? 'block' : 'none';
        }
    }

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

});