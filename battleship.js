var location1, location2, location3;
            var guess, guesses, firstGuess, secondGuess;
            var hits;
            var isSunk = false;
            var x = Math.random();

            location1 = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
            if (location1 <= 2 ) {
                location2 = location1 + 1;
                location3 = location2 + 1;
            } else if (location1 >= 5) {
                location2 = location1 - 1;
                location3 = location2 - 1;
            } else {
                if (x < 0.5) {
                    x = -1;
                } else {
                    x = 1;
                }
                location2 = location1 + x;
                location3 = location2 + x;
            }

            guesses = 0;
            hits = 0;

            alert(location1);
            alert(location2);
            alert(location3);

            while (isSunk === false) {

                guess = prompt('Введите координаты выстрела(от 1 до 7): ');
                if (isNaN(guess)) {
                    alert('Введите число');
                } else if (guess < 1 || guess > 7) {
                    alert('Число должно быть в диапазоне от еденицы до семёрки');
                } else {
                    guesses += 1;
                    alert('Число попыток: ' + guesses);

                    if (Number(guess) === location1 || 
                        Number(guess) === location2 || 
                        Number(guess) === location3) {
                            if (firstGuess !== guess && secondGuess !== guess) {
                                hits += 1;
                                firstGuess = guess;
                                alert('Попа Дания: ' + hits);
                            } else {
                                alert('Вы уже стреляли по этой части судна. Повторый выстрел ничего не меняет.')
                                secondGuess = guess;
                            }
                        if (hits === 3) {
                            isSunk = true;
                            alert('Корабль потоплен')
                        }
                    } else {
                        alert('Неверно. Попробуйте ещё раз');
                    }
                }
            }

            alert('Цикл завершён. Выстрелов: ' + 
                                       guesses + 
                               '. Попаданий: ' + 
                                          hits + 
                                '. Точность: ' +
                             3 / guesses * 100 + "%");