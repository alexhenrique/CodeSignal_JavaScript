/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
Example
For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.
Ratiorg needs statues of sizes 4, 5 and 7.
*/

/* function makeArrayConsecutive2(statues) {
    let tam = statues.length;
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    return (max - min)-tam+1;
}
*/
makeArrayConsecutive2 = statues => Math.max(...statues) - Math.min(...statues) - statues.length + 1;

console.log(makeArrayConsecutive2([1, 3, 4, 120]))