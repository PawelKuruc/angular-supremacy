import { User } from "./User";

export class Task {
    private name: string;
    private description: string;
    private assignment?: User;
    private history: string;

    constructor(name: string, desc: string, user?: User){
        this.name = name;
        this.description = desc;
        this.assignment = user;
        this.history = ((user == undefined)? '> Task \"'+name+'\" has been created.\n\n' : '> Task "'+name+'" has been created and asigned to '+user.name+'.\n\n');
    }

    getName(): string{ return this.name; }
    setName(name: string){ 
        var oldName = this.name;
        this.name = name;
        this.history += '> The name of the task has been changed from '+oldName+' to '+name+'.\n\n'; 
    }

    getDescription(): string{ return this.description; }
    setDescription(desc: string){
        this.description = desc;
        this.history += '> "'+this.name+'" task description has been modified.\n\n';
    }

    getAssignedUser(): User{ 
        if(this.assignment != undefined){
            return this.assignment;
        }else{
            return new User('not assigned','gray');
        }
    }
    assign(user: User): boolean{
        if (this.assignment == undefined){
            this.assignment = user;
            this.history += '> "'+this.name+'" task has been asigned to '+user.name+'.\n\n';
            return false;
        }else{
            var previousUser = this.assignment;
            this.assignment = user;
            this.history += '> "'+this.name+'" task has been transfered from '+previousUser.name+' to '+user.name+'.\n\n';
            return true;
        }
    }
    removeAssignment(){
        if (this.assignment != undefined){
            var previousUser = this.assignment;
            this.assignment = undefined;
            this.history += '> "'+this.name+'" task has been dropped by '+previousUser.name+'.\n\n';
        }
    }

    showTaskHistory(){ console.log('[ "'+this.name.toUpperCase()+'" HISTORY ]\n\n'+this.history); }
}