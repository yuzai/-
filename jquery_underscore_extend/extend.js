// //自己实现浅拷贝
// var person = {
//   name:'xiaobo',
//   age:24,
//   //测试属性值为数组
//   city:['上海','北京','运城',['南京','西安','北京']],
//   //测试属性值为对象
//   wife:{
//     name:'xiaohuan',
//     age:24
//   }
// };
// //浅拷贝
// function extendl(obj){
//   var newobj = {};
//   for(var key in obj){
//     //直接对属性值进行拷贝，属性值为引用类型的修改会影响原来的属性值
//     newobj[key] = obj[key];
//   };
//   return newobj;
// };
// //深拷贝
// function deepextend(obj){
//   var newobj = obj instanceof Array?[]:{};
//   for(var key in obj){
//     if(typeof obj[key] === 'object'){
//       newobj[key] = deepextend(obj[key]);
//     }else {
//       newobj[key] = obj[key];
//     }
//   }
//   return newobj;
// }
// var newperson = extendl(person);
// var newperson2 = deepextend(person);
// console.log('原对象');
// console.log(person);
// newperson.name = 'maxiaobo';
// newperson.city.push('西安');//对引用类型值的修改，会对原对象进行修改(如果是赋值，不属于修改，不会影响原对象)
// newperson.city[3].push('杭州');
// newperson.wife.name = 'tanghuan';
// // newperson.city = ['上海','北京','运城','西安']
// newperson2.name = 'maxiaobo2';
// newperson2.city.push('西安2');
// newperson2.city[3].push('杭州2');
// newperson2.wife.name = 'tanghuan2';
// console.log('浅拷贝');
// console.log(newperson);
// console.log('深拷贝');
// console.log(newperson2);
// console.log('对原对象的影响');
// console.log(person);

// jQuery.extend = jQuery.fn.extend = function() {
// 	var options, name, src, copy, copyIsArray, clone,
// 		target = arguments[ 0 ] || {},
// 		i = 1,
// 		length = arguments.length,
// 		deep = false;
//
// 	// Handle a deep copy situation
// 	if ( typeof target === "boolean" ) {
// 		deep = target;
//
// 		// Skip the boolean and the target
// 		target = arguments[ i ] || {};
// 		i++;
// 	}
//
// 	// Handle case when target is a string or something (possible in deep copy)
// 	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
// 		target = {};
// 	}
//
// 	// Extend jQuery itself if only one argument is passed
// 	if ( i === length ) {
// 		target = this;
// 		i--;
// 	}
//
// 	for ( ; i < length; i++ ) {
//
// 		// Only deal with non-null/undefined values
// 		if ( ( options = arguments[ i ] ) != null ) {
//
// 			// Extend the base object
// 			for ( name in options ) {
// 				src = target[ name ];
// 				copy = options[ name ];
//
// 				// Prevent never-ending loop
// 				if ( target === copy ) {
// 					continue;
// 				}
//
// 				// Recurse if we're merging plain objects or arrays
// 				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
// 					( copyIsArray = jQuery.isArray( copy ) ) ) ) {
//
// 					if ( copyIsArray ) {
// 						copyIsArray = false;
// 						clone = src && jQuery.isArray( src ) ? src : [];
//
// 					} else {
// 						clone = src && jQuery.isPlainObject( src ) ? src : {};
// 					}
//
// 					// Never move original objects, clone them
// 					target[ name ] = jQuery.extend( deep, clone, copy );
//
// 				// Don't bring in undefined values
// 				} else if ( copy !== undefined ) {
// 					target[ name ] = copy;
// 				}
// 			}
// 		}
// 	}
//
// 	// Return the modified object
// 	return target;
// };

//underscore.js
var _ = require('./underscore');
console.log(_);
