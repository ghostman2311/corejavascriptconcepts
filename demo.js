const users = [
    {
        id: 1,
        title: 'one',
        description: 'Desc 1'
    },
      {
        id: 2,
        title: 'two',
        description: 'Desc 2'
    },
      {
        id: 3,
        title: 'three',
        description: 'Desc 3'
    }
];

function getItem(id){
   return users.find(item => item.id===id);
}

//console.log(getItem(3))


const userMap = new Map([
    [1, {id: 1, title: 'one', description: 'Desc 1'}],
    [2, {id: 2, title: 'two', description: 'Desc 2'}],
    [3, {id: 3, title: 'three', description: 'Desc 3'}]
    ]);
    
function getItemMap(id){
    return userMap.get(id);
}

console.log(getItemMap(2))
