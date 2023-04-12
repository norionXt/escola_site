


export default interface driver<T>{
    select(dados: Object):Promise<T>;
    update(dados:Object):void;
    delete(id:number):void;
    insert(dados:Object):void;
}