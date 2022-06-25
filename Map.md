# MAP

## Difference between map and object with an example(i.e point object to value in map)

## Convert this object snippet into Map

const users = [
{
id: 1,
title: "one",
description: "Desc 1",
},
{
id: 2,
title: "two",
description: "Desc 2",
},
{
id: 3,
title: "three",
description: "Desc 3",
},
];

function getItem(id) {
return users.find((item) => item.id === id);
}
