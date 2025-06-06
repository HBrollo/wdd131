const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => 
    {
        displayList(chapter);
    })

function displayList(item)
{
    let li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌'
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);       
    deleteButton.addEventListener('click', function()
        {list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
        })
    // I thought the console.log text was so funny it almost made me want to copy it in lol
}

function setChapterList()
{
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList()
{
    return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter()
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

button.addEventListener('click', function()
{
    if (input.value.trim() !== '')
        {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
        }
}


)
