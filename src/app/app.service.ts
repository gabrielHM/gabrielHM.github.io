export class ExampleService {
    
    get() {
        return this.exampleData;
    }
    
    set(item) {
        this.exampleData.push(item);
    }
    
    delete(item) {
        let index = this.exampleData.indexOf(item);
        if(index >= 0){
            this.exampleData.splice(index, 1);
        }
    }
    
    exampleData = [
        { 
            id: 1,
            name: "Juan"
        },
        {
            id: 2,
            name: "Pedro"
        }];
}