export default {
    install(Vue, options){
        
        Vue.$myName = '哈哈'
        
        Vue.myGlobalMethod = function() {
            
        }
        
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode){
                
            }
        })
        
        Vue.mixin({
            methods: {
                greetingFn(){
                    console.log("greeting")
                }
            },
            created: function(){
                console.log("全局的created")
            }
        })
        
        Vue.prototype.$meMethod = function(options){
            
        }
    }
}