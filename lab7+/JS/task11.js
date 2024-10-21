const user = {
    _FirstName : '',
    _SecondName: '',

    get FirstName(){
        return this._FirstName;
    },

    set FirstName(value){
        this._FirstName = value;
    },
    
    get SecondName(){
        return this._SecondName;
    },

    set SecondName(value){
        this._SecondName = value;
    },

    get FullName(){
        return `${this._FirstName} ${this._SecondName}`;
    },

    set FullName(value){
        const names = value.split(' ');
        if (names.length >= 2)
        {
            this._FirstName = names[0];
            this._SecondName = names.slice(1).join(' ');
        }
        else
        {
            console.log("Полное имя должно содеражть имя и фамилию!");
        }
    }
};

user.FirstName = "Violetta";
user.SecondName = "Babich";

console.log(user.FirstName);
console.log(user.SecondName);
console.log(user.FullName);

user.FullName = "Violetta"
