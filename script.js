/*for (let i = 0; i<11; i++) {
    if (i===0) {
        console.log(`${i} - это ноль`);
    } else if (i%2!=0){
        console.log( `${i} - нечетное число`);
    } else {
        console.log( `${i} - четное число`);
        }
    }1.Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
    0 – это ноль
    1 – нечетное число
    2 – четное число
    3 – нечетное число
    2.Дан массив [1, 2, 3, 4, 5, 6, 7]
    Сделайте из этого массива следующий [1, 2, 3, 6, 7]
    const array =[1, 2, 3, 4, 5, 6, 7];
    array.splice (3,2);
    console.log(array)
    3.Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
    1. Рассчитать сумму элементов этого массива
    2. Найти минимальное число
    3. Найти есть ли в этом массиве число 3
    let array = []
for (let i = 0; i < 5; i++) {
    array.push(0 + Math.round(Math.random() * (8 - 0) + 1))
}
            console.log (array)
            /*let sum=0;
            for (let i = 0; i < array.length; i++) {
                sum+= array[i];
                
            }
            console.log(sum)
            
                console.log(Math.min(...array));
                for (let i = 0; i<5; i++) {
                    if (array[i]===3) {
                        console.log(`${i} число 3 есть`);}
                        
                    }
                   4. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами.
                     Давайте переберем его циклом и числа, которые делятся на 2, 
                    возведем в квадрат и выведем в консоль, а числа, которые делятся на 3,
                     возведем в куб и выведем в консоль.
                     const array = []
                     for (let i = 0; i < 10; i++) {
                         array[i]=Math.round(Math.random()*10);
                     }
                                 console.log (array)
                                 for (let i = 0; i<array.length; i++) {
                                    if (array[i]%2===0) {array[i]=array[i]**2}
                                        console.log(array);
                                 }
                                 for (let i = 0; i<array.length; i++) {
                                 if(array[i]%3===0) {array[i]=array[i]**3}
                                 console.log(array);
                                 }
                                 5.Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
                                   Подсчитайте количество цифр 3 в этом массиве.
                                const array = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
                                let sum=0;
            for (let i = 0; i < array.length; i++) {
                                if (array[i]===3)
                sum++;
                }
            console.log(sum)
            6.Дан следующий массив:[1, 2, 3, 4, 5]
            С помощью метода массива преобразуйте его в следующий:[1, 4, 5]*/
            const array=[1, 2, 3, 4, 5];
            array.splice (1,2);
    console.log(array)
                                 
                                
                                
        
                            
    
        
