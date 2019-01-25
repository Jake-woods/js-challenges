const countWord = (input) => {
   input = input.match(/[^_\W]+/g).join(' ');
   return input = input.split(' ').length;
}

console.log(countWord(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam modi consequuntur consequatur ullam
necessitatibus saepe illum assumenda cumque ex minima culpa eaque, accusantium recusandae voluptate quod sequi
accusamus. Consequatur quasi obcaecati, excepturi laboriosam veniam corrupti suscipit quidem exercitationem illum iure
aut magnam nesciunt repellat dolor asperiores repudiandae officia nisi?`));