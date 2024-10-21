/*4. Создайте объект team, который содержит \
массив игроков и метод для вывода 
информации о каждом игроке. 
Используйте this в вложенной функции.*/

const team = {
    players: [
        { id: 1, name: "Alex", game: "football" },
        { id: 2, name: "Kirill", game: "volleyball" },
        { id: 3, name: "Maxim", game: "judo" }
    ],
    
    printPlayers() {
        this.players.forEach(player => {
            console.log(`ID: ${player.id}, Name: ${player.name}, Game: ${player.game}`);
        });
    }
};

team.printPlayers();
