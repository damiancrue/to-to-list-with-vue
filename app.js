const app = new Vue({
    el:'#app',
    data:{
        titulo: 'lista de tareas TO-DO',
        tareas: [],
        nuevaTarea:""
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado: false
            })
            localStorage.setItem('to-do-vue',JSON.stringify(this.tareas))        
            this.nuevaTarea=""
        },
        reset: function(){
            this.tareas=[]
            this.nuevaTarea=""
            localStorage.setItem('to-do-vue',JSON.stringify(this.tareas)) 
        },
        editarTarea: function(index){
            this.tareas[index].estado=true
            localStorage.setItem('to-do-vue',JSON.stringify(this.tareas))   
        },
        eliminarTarea: function(index){
            this.tareas.splice(index,1)
            localStorage.setItem('to-do-vue',JSON.stringify(this.tareas))   
        }
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('to-do-vue'))
        if(datosDB===null){
            this.tareas=[];
        }else{
            this.tareas=datosDB
        }
        }
    }
)
