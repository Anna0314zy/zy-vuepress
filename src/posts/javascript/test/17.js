let a = 'global'
console.log(a);//'global'
function course() {
  let b = 'this指向'
  console.log(b);//'this指向'
 
  session()
  function session() {
    let c = 'this'
    console.log(c);//'this'
 
    teacher()
    function teacher() {
      let d = 'yy'
      console.log(d);//'yy'
 
      console.log('test1', b);//'test1' 'this指向'
    }
  }
}
 
console.log('test2', b)//b is not defined
course()