Vue.component('my-component',{
    template:'<div>A custopm cpmponent</div>'
})
new Vue({
    el:'#example'
})

var Child = {
    template:'<div>A child custom component</div>'
}
new Vue({
    el:'.child',
    components:{
        'my-childcom':Child
    }
})

Vue.component('simple-counter',{
    template:'<button v-on:click="counter += 1">{{counter}}</button>',
    data:function(){
        return {
            counter:0
        }
    }
})
new Vue({
    el:'#example2'
})

Vue.component('child',{
    props:['message'],
    template:'<span>{{message}}</span>'
})
new Vue({
    el:'#prop',
    data:{
        'test':'hello'
    }
})
Vue.component('comp',{
    props:['someProp'],
    template:'<span>{{someProp+1}}</span>'
})
new Vue({
    el:'#prop2',
    data:{
        'someProp':1
    }
})
Vue.component('button-counter',{
    template:'<button v-on:click="increment">{{counter}}</button>',
    data:function(){
        return {
            counter:0
        }
    },
    methods:{
        increment:function(){
            this.counter += 1
            this.$emit('increment')
        }
    }
})
new Vue({
    el:'#counterEvent',
    data:{
        total:0
    },
    methods:{
        incrementTotal:function(){
            this.total += 1
        }
    }
})

Vue.component('currency-input',{
    template:'\
        <div>\
            <label v-if="label">{{label}}</label>\
            $\
            <input\
                ref="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)"\
                v-on:foucus="selectAll"\
                v-on:blur="formatValue"\
            >\
        </div>\
    ',
    props:{
        value:{
            type:Number,
            default:0
        },
        label:{
            type:String,
            default:''
        }
    },
    mounted:function(){
        this.formatValue()
    },
    methods:{
        updateValue:function(value){
            var result = currencyValidator.parse(value,this.value)
            if(result.warning){
                this.$refs.input.value = result.value
            }
            this.$emit('input',result.value)
        },
        formatValue:function(){
        this.$refs.input.value = currencyValidator.format(this.value)
        },
        selectAll:function(event){
            setTimeout(function(){
                event.target.select()
            },0)
        }
    }
})
new Vue({
    el:'#app',
    data:{
        price:0,
        shipping:0,
        handling:0,
        discount:0
    },
    computed:{
        total:function(){
            return ((
                this.price*100+
                this.shipping*100+
                this.handling*100-
                this.discount*100
                     )/100).toFixed(2)
        }
    }
})
Vue.component('my-slot',{
    template:'<div>\
                <h1>我是子组件的标题</h1>\
                <slot>只有没有分发的内容时才会显示</slot>\
              </div>'
})
new Vue({
    el:'#slot'
})
var childSlot = {
    template:'<div>\
                <h1>我是子组件的标题</h1>\
              </div>'
          }

var parentSlot = {
    template:'<div id="cs"><h1>我是父组件的标题</h1>\
            <my-slot2>\
                <p>这是初始的内容</p>\
                <p>这是更多的初始内容</p>\
            </my-slot2></div>'
}


new Vue({
    el:'#slotTest',
    components:{
        'my-parentslot':parentSlot
    }
})
new Vue({
    el:'#cs',
    components:{
        'my-slot2':childSlot
    }
})

Vue.component('app-layout',{
    template:'<div><header>\
                    <slot name = "header"></slot>\
                </header>\
                <main>\
                    <slot></slot>\
                </main>\
                <footer>\
                    <slot name = "footer"></slot>\
                </footer></div>'
})
new Vue({
    el:'.container'
})
Vue.component('my-child',{
    template:'<div>\
                <slot text="hello from child"></slot>\
              </div>'
})
new Vue({
    el:'#slot2'
})
Vue.component('my-awesome-list',{
    template:'<ul>\
                <slot name="item"\
                      v-for="item in items"\
                      :text = "item.text"></slot>\
              </ul>',
    props:['items']
})
new Vue({
    el:'#listSlot',
    data:{
        'items':[
            {text:'one'},
            {text:'two'},
            {text:'three'}
        ]
    }
})

var vm = new Vue({
    el:'#changeView',
    data:{
        currentView:'Home'
    },
    components:{
        Home:{
            template:'<p>welcome home</p>'
        },
        Posts:{
            template:'<p>welcome posts</p>'
        },
        archive:{
            template:'<p>welcome archive</p>'
        }
    }
})