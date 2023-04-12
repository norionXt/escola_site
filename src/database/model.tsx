import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, endAt, Firestore, getDocs, getFirestore, limit, orderBy, query, QueryFieldFilterConstraint, QueryLimitConstraint, QueryOrderByConstraint, setDoc, startAt, updateDoc, where, WhereFilterOp } from 'firebase/firestore';
import config from '../config.js';



export default class Model {

    private filtro: QueryFieldFilterConstraint[] = [];
    private db: Firestore = getFirestore(initializeApp(config.configs.firebase));
    private table: string = this.constructor.name;
    private page: any[] = [];
    private order:QueryOrderByConstraint[] = [];
    private limite:QueryLimitConstraint[] = []; 
    private colection: string[] = [];   

    constructor() {
    }

    async select() {
        let dados = query(
                collection(this.db, this.table, ...this.colection),
                ...this.filtro,
                ...this.page,
                ...this.order,
                ...this.limite
            );

        return await getDocs(dados);
        
    }

    async delete(id: string) {
        await deleteDoc(doc(this.db, this.table, ...this.colection, id))
    }


    async update(id: string, dados:object) {
        await updateDoc(doc(this.db, this.table, ...this.colection, id), dados);
    }

    async insert(dados:object) {
        await addDoc(collection(this.db, this.table, ...this.colection), dados);
    }


    colections(colection: string) {
        this.colection.push(colection);
        return this;
    }


    where(
        campo: string,
        condicional: WhereFilterOp,
        valor: string
        ) {
        this.filtro.push(
            where(campo, condicional, valor)
        );
        return this;
    }

    paginate(start?:number, final?:number) {
        if(start) {
            this.page.push(startAt(start))
        } 
        if(final) {
            this.page.push(endAt(final));
        }
        return this;
    }


    limit(limite: number) {
        this.limite.push(limit(limite));
        return this;
    }


    orderBy(order: string) {
        this.order.push(orderBy(order));
        return this;
    }
}