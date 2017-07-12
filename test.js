 var app = new Vue({
            el:'#app',
            data:{
                message:'Hello Vue'
            }
        })

        var app2 = new Vue({
            el:'#app2',
            data:{
                message:'you loaded this page on ' + new Date()
            }
        })

        var app3 = new Vue({
            el:'#app3',
            data:{
                seen:true
            }
        })

        var app4 = new Vue({
            el:'#app4',
            data:{
                todos:[
                    {text : 'one',name:'1'},
                    {text : 'two',name:'2'},
                    {text : 'three',name:'3'}
                ]
            }
        })

        var app5 = new Vue({
            el:'#app5',
            data:{
                message :'hello Vue.js'
            },
            methods:{
                reverseMessage: function(){
                    this.message = this.message.split('').reverse().join('')
                },
                mousedown:function(){
                    this.message = 'mousedown'
                }
            }
        })

        var app6 = new Vue({
            el:'#app6',
            data:{
                message:'hello vue'
            }
        }) 

        Vue.component('todo-item',{
            props:['todo'],
            template:'<li>{{todo.text}}</li>'
        });
        var app7 = new Vue({
            el:'#app7',
            data:{
                array:[
                    {text:'one'},
                    {text:'two'},
                    {text:'three'}
                ]
            }
        })

        var app8 = new Vue({
            el:'#app8',
            data:{
                message:'hello vue'
            },
            computed:{
                reversedMessage:function(){
                    return this.message.split('').reverse().join('');
                }
            }
        })

        var app9 = new Vue({
            el:'.static',
            data:{
                isActive:true,
                'isBorder':false
            }
        })
        var _app9 = new Vue({
            el:'#app9',
            data:{
                classObj:{
                    active:false,
                    'border':true
                }
            }
        })
        Vue.component('test-Component',{
            template:'<p class="static active">test</p>'
        })
        var app10 = new Vue({
            el:'#app10',
            data:{
                type:10
            }
        })
        var app11 = new Vue({
            el:'#app11',
            data:{
                name:'username'
            },
            methods:{
                login:function(){
                    this.name = this.name=='username'?'':'username';
                }
            }
        })

        var app12 = new Vue({
            el:'#app12',
            data:{
                parentMessage:'parentMessage',
                items:[
                    {name:'qwe'},
                    {name:'asd'},
                    {name:'zxc'}
                ]
            }
        })

        var obj = new Vue({
            el:'#obj',
            data:{
                obj:{
                    firstName:'qwe',
                    lastName:'asd',
                    age:30
                }
            }
        })

        Vue.component('todo-item',{
            template:'\
                <li>\
                    {{title}}\
                    <button v-on:click="$emit(\'remove\')">X</button>\
                </li>\
            ',
            props:['title']
        })

        var todo = new Vue({
            el:'#todo-list-example',
            data:{
                newTodoText:'',
                todos:[
                    'do the dishes',
                    'take out the trash',
                    'Mow the lawn'
                ]
            },
            methods:{
                addNewTodo:function(){
                    this.todos.push(this.newTodoText)
                    this.newTodoText = ''
                }
             }
            })
        var edit = new Vue({
            el:'#edit',
            data:{
                message:'',
                selected:'A',
                selectedArry:'A',
                options:[
                    {text:'one',value:'A'},
                    {text:'two',value:'B'},
                    {text:'three',value:'C'},
                ]
            }
        })