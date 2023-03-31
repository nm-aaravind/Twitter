class crudRepository{
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            const response= await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async get(id){
        try {
            const response=await this.model.findById(id)
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async getAll(){
        try {
            const response=await this.model.find();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async update(id,data){
        try {
            const response=await this.model.findByIdandUpdate(id,data,{new:true})
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}
export default crudRepository;