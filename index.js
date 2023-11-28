/**
 * ! الرقم في جافاسكربت هو نفسه الرقم الحقيقي في الرياضيات
 * * قد يكون رقم صحيح مثل 1, 6, 500, -15, 2455
 * * قد يكون رقم عشري مثل 0.5, 1.5, 95959.000005151
 * * 1.00000000000000009 = 1 لان جافاسكربت تخصص مساحة محدودة للارقام فترفع الرقم الى واحد
 */

console.log(180, 25.5, 79);

// ? *******************************************************/

/**
 * ! العمليات الرياضية
 * * جمع +
 * * طرح -
 * * ضرب *
 * * قسمة /
 * * باقي قسمة %
 * * اسس **
 */

console.log(1 + 1);
console.log(59 - 100);
console.log(11 * 110);
console.log(180 / 18);
console.log(5959 % 2); // نستخدم باقي القسمة % لنمييز الرقم الزوجي عن الفردي
console.log(2 ** 8); // 2 ^8

// ? *******************************************************/

/**
 * ! NaN: Not a Number, Infinity
 * NaN تعني ليس برقم
 * و جافاسكربت تعامل NaN على انها رقم
 * */
console.log(0 / 0); // => NaN
console.log(1 + NaN); // => NaN
console.log(1 / 0); // => Infinity
console.log(-1 / 0); // => -Infinity

// ? *******************************************************/

/**
 * ! Variables / المتغيرات
 * * المتغيرات في البرمجة هي طريقة تخزيين قيم لكي يتم اعادة استخدامها او تغيرها حسب ظروف معينة
 * * var vs let vs const
 * */

/*
 * const تعني ان هذا المتغير لا يمكن تغييره مثل الثابت باي بالرياضيات قيمته ثابتة و هي 3.14
 */
const pi = 3.14;
// pi = 5; ERROR TypeError: Assignment to constant variable.

/**
 * let تتيح تغيير القيمة على عكس const
 */

let fullName = 'Mutlaq';
fullName = 'Mutlaq Alsadeed'; // OKAY NO ERROR

/**
 * var هي الطريقة القديمة المستخدمة في جافاسكربت لتعريف متغيير و يوجد 3 اسباب سوف نذكرهم لعدم استخدامها
 * اول سبب ان لا يوجد اي احد يستخدمها الان
 * الاسباب المتبقية سوف نذكرها حين ياتي وقتها
 */

var birthday = '7/12/2000';
birthday = '07/12/2000'; // OKAY NO ERROR

// ? *******************************************************/

/**
 * ! Unary Operators (+ - * /)
 * و هي طريقة للعمليات الرياضية السريعة في جافاسكربت
 * و يوجد لها ثلاثة اشكال
 */

/**
 * الشكل الاول
 * <variable name>++;
 */
// لنفترض اننا نريد عد المستخدمين في مطعم, كل ما نرى عميل جديد نزيد عدد العملاء واحد
let customersCount = 0; // في بداية يوم العمل عدد العملاء هو صفر
// دخل عميل
customersCount = customersCount + 1;
// customersCount =      0         + 1
// customersCount اصبح واحد
// customersCount = customersCount + 1 لكي نختصر كتابة
customersCount++; // يمكننا ان نزيد عدد العملاء بهذه الطريقة السريعة
// <variable name>++;
// ! للتنبيه عندما نطبع هذه العملية
console.log(customersCount++); // OUTPUT 2
console.log(customersCount); // OUTPUT 3
// customersCount++ بمعنى ان العملية الزيادة تتم بعد كتابة

// ? *******************************************************/
/**
 * الشكل الثاني
 * ++<variable name>;
 * و الفرق بين هذا الشكل و شكل واحد هو انه بهذا الشكل تتم عملية الزيادة في نفس الوقت
 */
let connectedUsersCount = 0;
console.log(++connectedUsersCount); // OUTPUT 1

let subscribersCount = 0;
console.log(subscribersCount++); // OUTPUT 0

// ? *******************************************************/

/**
 * الشكل الثالث
 * <variable name> += <value>
 * <variable name> = <variable name> + <value> و هذه معنى الشكل
 */

let multiplesOfTwo = 0;
multiplesOfTwo += 2; // 2
multiplesOfTwo += 2; // 4
multiplesOfTwo += 2; // 6
multiplesOfTwo += 2; // 8
multiplesOfTwo += 2; // 10
console.log(multiplesOfTwo);

// ? *******************************************************/

/**
 * ! Booleans
 * * true
 * * false
 * و هي قيمة برمجية اما ان تكون صح او خطأ True or False
 */
let isUserSubscribed = false; // في يوتيوب الحالة الافتراضية هو انه انت لست مشترك في كل القنوات
isUserSubscribed = true; // عندما تعجبك قناة تضغط على زر الاشتراك

// ? *******************************************************/

/**
 * ! Strings
 * في عالم البرمجة, نقول للنص سواء كان يتألف من حرف واحد, كلمة, جملة أو نص كبير جدا انه
 * string
 * و قد يكون مختلط بارقام او رموز
 * و طريقة تعريفه تبدأ في احد الاشكال التالية
 * * ""
 * * ''
 * * ``
 * كما لاحظتم اننا نكرر الرمز مرتان في الاشكال الثلاثة السابقة و هذا لان او رمز يعني البداية و ثاني رمز يعني النهاية
 */

let firstName = 'Mutlaq';
let lastName = 'Alsadeed';
let mutlaqSaid = 'Hello Ahmed';
let mutlaqQuotingAhmed = 'Ahmed said "Hi"';
//                                   يمكن استخدام الرمزان ' "  بشرط استخدام الرمز الاخر لبداية الجملة
let ahmedSaid = "Don't misquote me!";
let doubleQuotesAndSingleQuotes = `I can use ' and " here`;

// ? *******************************************************/

/**
 * يمكن الوصول الى عناصر
 * string
 * عن طريق وضع اسم المتغيير ثم
 * []
 * <string variable name>[<order starting from 0>]
 */
let stringMutlaq = 'Mutlaq';
console.log(stringMutlaq[0]); // M
console.log(stringMutlaq[1]); // u
console.log(stringMutlaq[2]); // t
console.log(stringMutlaq[3]); // l
console.log(stringMutlaq[4]); // a
console.log(stringMutlaq[5]); // q
// M u t l a q
// 0 1 2 3 4 5

// ? *******************************************************/

/**
 * ولكن لا يمكن تغيير عنصر ال
 * string
 */

stringMutlaq[0] = 'K'; // لن يتغيير
console.log(stringMutlaq);

/**
 * و هذا يعني ان
 * string is immutable
 * بمعنى لا يمكن تغيير قيمته
 */

// ? *******************************************************/

/**
 * يوجد في جافاسكربت ما يعرف ب
 * string methods
 * و هي افعال يمكن تنفيذها على ال
 * string
 * طريقة تنفيذها
 * <string>.<method name>()
 * مثال
 * stringMutlaq.toUpperCase()
 */

// * "".toUpperCase() تحويل النص الى احرف كبيرة
console.log(stringMutlaq.toUpperCase()); // MUTLAQ

// * "".toLowerCase() تحويل النص الى احرف صغيرة

let upperCaseStringMutlaq = 'MUTLAQ';
console.log(upperCaseStringMutlaq.toLowerCase()); // mutlaq

// * "".indexOf(<string to find>)     يجد ترتيب الحرف في النص

console.log('Mutlaq'.indexOf('u')); // 1
console.log('Mutlaq'.indexOf('q')); // 5
console.log('Mutlaq'.indexOf('m')); // -1 (تعني لم يتم العثور عليه)
console.log('Mutlaq'.indexOf('M')); // 0

// * "".slice(<from>, <to>)  اقتصاص جزء من النص

console.log('Mutlaq'.slice(0, 5)); // Mutla
console.log('Mutlaq'.slice(0, 6)); // Mutlaq
console.log('Mutlaq'.slice(0, 3)); // Mut
console.log('Mutlaq'.slice(2, 5)); // tla
console.log('Mutlaq'.slice(5, 1)); //
console.log('Mutlaq'.slice(0)); // Mutlaq

// * "".replace() تبديل جزء من النص بنص اخر
console.log('Mutlaq'.replace('M', 'm')); // mutlaq
console.log('Mutlaq'.replace('utl', 'hehe')); // Mheheaq
console.log('Mutlaq'.replace('q', 'q Alsadeed')); // Mutlaq Alsadeed

// * "".trim() حذف الفراغات بعد النص و قبل النص
console.log('           mutlaq       '.trim()); // mutlaq
console.log('           mut    laq       '.trim()); // mut    laq

/**
 * يوجد ما يعرف ب
 * String Escape Characters
 * * \n نكتبها في داخل النص للذهاب الى سطر جديد
 * * \' نكتبها لكي نضع رمز ال(')
 * * \" نكتبها لكي نضع رمز ال(")
 * * \\ نكتبها لكي نضع رمز ال(\)
 */

console.log(
	'This is a \' single quote, this is a " double quote, this is a \\ back slash, this is a \n new line'
);

// ? *******************************************************/

/**
 * Null تحددها برغبتك لتمثيل عدم وجود قيمة
 * Undefined متغيرات لا قيمة لها
 */

let raceWinner = null;
// after someone wins the race
raceWinner = 'Mutlaq';

console.log('mutlaq'[6]); // undefined
// لا يوجد قيمة
// لان الكلمة متكونة من 5 احرف تبدا من 0 و ليس 1

// ? *******************************************************/

/**
 * في جافاسكربت يوجد ما يعرف ب
 * ! Math Object
 * و هو يساعد في بعض العمليات الحسابية
 * * Math.PI
 * * Math.round()
 * * Math.abs()
 * * Math.pow()
 * * Math.floor()
 */

console.log(Math.PI); // 3.141592653589793
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.9)); // 2
console.log(Math.abs(-151)); // 151
console.log(Math.pow(2, 8)); // 256
console.log(Math.floor(50.9)); // 50
console.log(Math.ceil(50.9)); // 51

// ? *******************************************************/

/**
 * يوجد ايضا كلمة مفتاحية تسمى
 * typeof
 * و هي تساعد بمعرفة نوع المتغيير
 */

let variableThatHasAString = 'string';
let variableThatHasANumber = 5;
let variableThatHasABoolean = true;

console.log(typeof variableThatHasAString); // 'string'
console.log(typeof variableThatHasANumber); // 'number'
console.log(typeof variableThatHasABoolean); // 'boolean'

// ? *******************************************************/

/**
 * للتحويل من نص الى رقم يمكننا استخدام
 * * +"", parseInt(), parseFloat(), Number()
 */

console.log(+'1'); // 1
console.log(typeof +'1'); // 'number'
console.log(+'11string'); // NaN
console.log(+'str11ing'); // NaN
console.log(+'string11'); // NaN

console.log(parseInt('2')); // 2
console.log(typeof parseInt('2')); // 'number'
console.log(parseInt('22string')); // 22 WORKS
console.log(parseInt('str22ing')); // NaN
console.log(parseInt('string22')); // NaN

console.log(parseFloat('10.5')); // 10.5
console.log(typeof parseFloat('10.5')); // 'number'
console.log(parseFloat('10.5string')); // 10.5 WORKS
console.log(parseFloat('str10.5ing')); // NaN
console.log(parseFloat('string10.5')); // NaN

console.log(Number('3')); // 3
console.log(typeof Number('3')); // 'number'
console.log(Number('33string')); // NaN
console.log(Number('str33ing')); // NaN
console.log(Number('string33')); // NaN

// ? *******************************************************/

/**
 * في عالم البرمجة يوجد ما يعرف ب
 * ! Comparisons
 * و هي مقارنات بين متغييرات و قيم و ناتج المقارنة دائما اما
 * true or false
 */

//          هل واحد اكبر من اثنين
console.log(1 > 2); // false
//           هل واحد اصغر من اثنين
console.log(1 < 2); // true
//           هل واحد اكبر او تساوي اثنين
console.log(1 >= 2); // false
//            هل واحد اصغر او تساوي اثنين
console.log(1 <= 2); // true
//           هل اثنين اكبر او تساوي اثنين
console.log(2 >= 2); // true
//          هل اثنين اصغر او تساوي اثنين
console.log(2 <= 2); // true

let number1 = 50;
let number2 = 50;
//               هل المتغيير الاول يساوي المتغير الثاني
console.log(number1 === number2); // true

let number3 = 10;
let number4 = 15;
//              هل المتغير الاول لا يساوي المتغيير الثاني
console.log(number3 !== number4); // true

/**
 * الفرق بين استخدام
 * == vs ===
 * هو انه
 * ==
 * تتاكد من القيمة فقط
 */
console.log('3' == 3); // true
/**
 * ===
 * تتاكد من القيمة و النوع
 */
console.log('3' === 3); // false

// ? *******************************************************/
/**
 * ! conditional statements
 * في عالم البرمجة يمكننا وضع شروط في الكود
 * مثال: اذا كان المستخدم عمره اكثر من 18 يمكنه ان ياخذ رخصة
 */

let userMutlaqAge = 17;
let isUserMutlaqAllegeableForLicense = false;
if (userMutlaqAge > 18) {
	isUserMutlaqAllegeableForLicense = true;
}
console.log(isUserMutlaqAllegeableForLicense); // false

let userAhmedAge = 20;
let isUserAhmedAllegeableForLicense = false;
if (userAhmedAge > 18) {
	isUserAhmedAllegeableForLicense = true;
}
console.log(isUserAhmedAllegeableForLicense); // true

/**
 * و يمكننا وضع اكثر من حالة للشروط
 * مثال: اذا علامة الطالب
 * 50 - 60 => Unsatisfactory
 * 61 - 70 => Satisfactory
 * 71 - 80 => Good
 * 81 - 90 => Very good
 * 91 - 100 => Excellent
 * if(<condition>) {} else if(<second condition>) {}
 */
let grade = 40;

if (grade >= 91) {
	console.log('Excellent');
} else if (grade >= 81) {
	console.log('Very good');
} else if (grade >= 71) {
	console.log('Good');
} else if (grade >= 61) {
	console.log('Satisfactory');
} else if (grade >= 50) {
	console.log('Unsatisfactory');
}

/**
 * و لكن بهذه الطريقة اذا كانت العلامة اقل من 50 لن نطبع اي شيء
 * ولحل هذه المشكلة ممكن ان نستخدم
 * else
 * و هي نكتب فيها الكود الذي لا تنطبق عليه شروط
 * if else if else if
 */
if (grade >= 91) {
	console.log('Excellent');
} else if (grade >= 81) {
	console.log('Very good');
} else if (grade >= 71) {
	console.log('Good');
} else if (grade >= 61) {
	console.log('Satisfactory');
} else if (grade >= 50) {
	console.log('Unsatisfactory');
} else {
	console.log('Failure'); // تغطي جميع الحالات المتبقية
}

// ? *******************************************************/

/**
 * ! Truthy vs Falsy
 * Falsy: -
 * * false
 * * 0
 * * ""
 * * null
 * * undefined
 * * NaN
 * Truthy: everything else
 */

/**
 * وللتاكيد لن تطبع العبارات التي بالاسفل لان تقديرها
 * false
 */

if (false) {
	console.log('False is obviously falsy');
}

if (0) {
	console.log('0 is falsy');
}

if (null) {
	console.log('null is falsy');
}
if (undefined) {
	console.log('undefined is falsy');
}
if (NaN) {
	console.log('NaN is falsy');
}
if ('') {
	console.log('"" is falsy');
}

// ? *******************************************************/

/**
 * ! Logical Operators
 * !   - NOT
 * &&  - AND
 * ||  - OR
 */

/**
 * مثل ما يوجد عمليات رياضية يوجد عمليات منطقية و هي تستخدم للتلاعب ب
 * boolean values
 * operands تعني احد طرفي المعادلة
 * usersCount = usersCount + 1
 * 	       الطرف الاول    +  الطرف الثاني
 * &&  - Logical AND: Returns true if both operands are true.
 * ||  - Logical OR: Returns true if at least one operand is true.
 * !   - Logical NOT: Returns true if the operand is false, and vice versa.
 */

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

/**
 * ملاحظة كون
 * NaN, 0, "", false, null, undefined
 * تقديرهم
 * false
 * يمكن وضع
 * ! NOT
 * قبلهم بالشرط لكي نحصل على
 * true
 *
 * الان يمكن طباعة الجمل التالية
 */

if (!false) {
	console.log('False is obviously falsy');
}

if (!0) {
	console.log('0 is falsy');
}

if (!null) {
	console.log('null is falsy');
}
if (!undefined) {
	console.log('undefined is falsy');
}
if (!NaN) {
	console.log('NaN is falsy');
}
if (!'') {
	console.log('"" is falsy');
}

// ? *******************************************************/

/**
 * بالاضافة الى
 * if, else if, else
 * يوجد في جافاسكربت
 * switch
 * و هي تودي الى نفس النتيجة ولكن قراتها اسهل بكثير
 * switch (<value to check>) {
 * 	case <value to check against>:
 * 		<code>;
 * 		break;
 *
 * 		default:
 * 		<code>;
 * }
 * ! default == else
 */
// BAD TO READ
let day = 1;
if (day === 1) {
	console.log('MONDAY');
} else if (day === 2) {
	console.log('TUESDAY');
} else if (day === 3) {
	console.log('WEDNESDAY');
} else if (day === 4) {
	console.log('THURSDAY');
} else if (day === 5) {
	console.log('FRIDAY');
} else if (day === 6) {
	console.log('SATURDAY');
} else if (day === 7) {
	console.log('SUNDAY');
} else {
	console.log('INVALID DAY');
}
// GOOD TO READ
switch (day) {
	case 1:
		console.log('MONDAY');
		break;
	case 2:
		console.log('TUESDAY');
		break;
	case 3:
		console.log('WEDNESDAY');
		break;
	case 4:
		console.log('THURSDAY');
		break;
	case 5:
		console.log('FRIDAY');
		break;
	case 6:
		console.log('SATURDAY');
		break;
	case 7:
		console.log('SUNDAY');
		break;
	default:
		console.log('INVALID DAY');
}

/**
 * وجود كلمة
 * break
 * هو للفصل بين الجمل بدونها الكود يستمر بالطباعة
 */

switch (day) {
	case 1:
		console.log('MONDAY');
	case 2:
		console.log('TUESDAY');
	case 3:
		console.log('WEDNESDAY');
	case 4:
		console.log('THURSDAY');
	case 5:
		console.log('FRIDAY');
	case 6:
		console.log('SATURDAY');
	case 7:
		console.log('SUNDAY');
	default:
		console.log('INVALID DAY');
}

// ? *******************************************************/

/**
 * و ايضا يوجد ما يعرف ب
 * Ternary operator
 * و هو اسرع للكتابة من
 * if, else
 * <condition> ? <value if condition is true> : <value if condition is false>
 */
let yourAge = 20;
let message = yourAge >= 18 ? 'You are an adult' : 'You are a minor';
console.log(message); //   "You are an adult"

let number = 5;
let result = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
console.log(result); //   "Positive"

// ? *******************************************************/

/**
 * يوجد في البرمجة ما يعرف ب
 * array
 * و تعني مصفوفة و هي مجموعة من القيم في متغيير واحد
 * const  = [<value 1>, <value 2>, <value 3>]
 * let  = [<value 1>, <value 2>, <value 3>]
 * ولا يشترط تشابه نوع القيم بمعنى
 * const mixedValues = ["strings  ", true, false, 200, "another string"]
 * هي مصفوفة صحيحة في جافاسكربت
 */

const students = ['Ahmed', 'Khalid', 'Muhammad', 'Jamil'];
//                     0        1          2           3

console.log(students[0]); // Ahmed
console.log(students[1]); // Khalid
console.log(students[2]); // Muhammad
console.log(students[3]); // Jamil

/**
 * على عكس ال
 * strings
 * يمكن تعديل ال
 * array
 * بمعنى انه قابل للتعديل
 * arrays are mutable
 */

students[3] = 'Samer';
console.log(students[3]); // Samer

// ? *******************************************************/

/**
 * Array Methods
 * مثل ما يوجد
 * string methods
 * يوجد
 * array methods
 */

// * [].push(<value>) ADD to the end of the array
// اضافة عنصر اخر المصفوفة
students.push('Jamil');
console.log(students); // [ 'Ahmed', 'Khalid', 'Muhammad', 'Samer', 'Jamil' ]

// * [].pop() REMOVE from the end of the array
// حذف اخر عنصر بالمصفوفة
console.log(students.pop()); // Jamil
console.log(students); // [ 'Ahmed', 'Khalid', 'Muhammad', 'Samer' ]

// * [].shift() REMOVE from the start of the array
// حذف اول عنصر بالمصفوفة
console.log(students.shift()); // Ahmed
console.log(students); // [ 'Khalid', 'Muhammad', 'Samer' ]

// * [].unshift(<value>) ADD to start of the array
// اضافة عنصر اول المصفوفة
students.unshift('Ahmed');
console.log(students); // [ 'Ahmed', 'Khalid', 'Muhammad', 'Samer' ]

// ** [].concat(<array>) - merge arrays DOES NOT CHANGE ORIGINAL ARRAY
// اضافة مصفوفتين الى بعض ولكن بدون تعديلهم
console.log(students.concat(['Abdallah', 'Yousuf'])); // [ 'Ahmed', 'Khalid', 'Muhammad', 'Samer', 'Abdallah', 'Yousuf' ]

// * [].includes(<value to search>) - look for a value and returns true or false
// يبحث في المصفوفة و يرجع
// true or false
console.log(students.includes('Ahmed')); // true
console.log(students.includes('ahmed')); // false
console.log(students.includes('Muhammad')); // true

// * [].indexOf(<value to search>) - just like str.indexOf

// * [].join() - creates a string from arr
// يصنع نص من المصفوفة
console.log(students.join()); // 'Ahmed,Khalid,Muhammad,Samer'

// * [].reverse() - reverses an array!
// عكس ترتيب عناصر المصفوفة
console.log(students.reverse()); // [ 'Samer', 'Muhammad', 'Khalid', 'Ahmed' ]

// ? *******************************************************/

/**
 * ! Objects Core of JavaScript
 * و هي اساس لغة جافاسكربت
 * لفهم ال
 * objects
 * لناخذ الانسان كمثال الانسان يحمل في داخله معلومات و خصائص متعلقه فيه
 * مثل الاسم العمر الطول الوزن والخ
 * من معلوماتنا السابقة كيف ممكن ان نخزن معلومات انسان في جافاسكربت؟
 */

// ممكن ان نخزن المعلومات كالتالي
const mutlaqObjectAsAString = 'Name: Mutlaq, Age: 23, Hight: 172cm, weight: 112kg';
// ولكن من الواضح ان هذه الطريقة لن تصلح لان لا يمكن ان نصل الى المعلومات بشكل سريع او واضح
const mutlaqObjectAsAnArray = ['Mutlaq', 23, 172, 112]; // و هذه الطريقة كذلك

// وبالتاكيد جافاسكربت لديها طريقة للتعامل مع هذا النوع من المعلومات و هي
const mutlaqObject = {
	name: 'Mutlaq',
	age: 23,
	hight: 172,
	weight: 112,
};

/**
 * const <Object Name> = {
 * 	<key / property / attribute>: <value>
 * }
 * و يمكن تخزين اي قيمة نود تخزينها ولو كانت مصفوفة
 * و يمكن اضافة قيم جديدة مثل المصفوفة
 */
mutlaqObject.technologies = [
	'NodeJS',
	'ExpressJS',
	'NestJS',
	'Angular',
	'ReactJS',
	'MongoDB',
	'PostgreSQL',
];
/**
 * و طريقة الوصول الى هذه المعلومات هي كالتالي
 * <Object Variable Name>.key
 * <Object Variable Name>.[key]
 */
console.log(mutlaqObject.name); // Mutlaq
// وهذه طريقة جدا واضحة و فعالة في تخزيين المعلومات المرتبطة بكيان ما و الوصول اليها

/**
 * و يمكن تخزين
 * key / property / attribute
 * كرقم ولكن تتغير طريقة الوصول الى المعلومات
 */

const weirdKeyNames = {
	1: 'One',
	2: 'Two',
	3: 'Three',
	'key with space': 'key value',
	'attribute with space': 'attribute value',
	'property with space': 'property value',
};

console.log(weirdKeyNames['1'], weirdKeyNames['attribute with space']); // One attribute value

// ? *******************************************************/

/**
 * ! Loops
 * كما راينا في قسم المصفوفات يمكن تخزيين مجموعة من القيم و قد يكون اعدادها كبيرة
 * و ايضا قلنا اننا يمكن وضع اي قيمة في المصفوفة مثال
 */
const usersArray = [
	{
		name: 'Mutlaq',
		age: 23,
		hight: 172,
		weight: 112,
		technologies: ['NodeJS', 'NestJS', 'Angular', 'ReactJS'],
	},
	{
		name: 'Alice',
		age: 28,
		height: 165,
		weight: 60,
		technologies: ['ReactJS', 'NodeJS', 'MongoDB'],
	},
	{
		name: 'Bob',
		age: 30,
		height: 178,
		weight: 80,
		technologies: ['Angular', 'ExpressJS', 'PostgreSQL'],
	},
	{
		name: 'Charlie',
		age: 25,
		height: 175,
		weight: 70,
		technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'NestJS'],
	},
];

// كيف يمكننا ان تطبع هذه المصفوفة؟
console.log(usersArray[0], usersArray[1], usersArray[2], usersArray[3]);

/**
 *  ولكن ماذا لو كانت هذه المصفوفة في ازدياد مستمر ولا نعرف حجمها؟
 * الحل هو استخدام
 * loops
 * و معناها تكرار
 * و يوجد لها عدة انواع في جافاسكربت و سوف نبدأ بابسط نوع و هو
 * for loop
 *
 * for(<declare a variable>; <condition>; <increment statement>) {
 * <code that will be repeated>
 * }
 */
for (let i = 0; i < usersArray.length; i++) {
	console.log(usersArray[i]);
}
/**
 *  تكرار
 * i  |  condition  |  result of condition  |  increment  |  code that ran
 * 0  |  0 < 4     |   true                 |	0++       |  console.log(usersArray[0])
 * 1  |  1 < 4     |   true                 |	1++       |  console.log(usersArray[1])
 * 2  |  2 < 4     |   true                 |	2++       |  console.log(usersArray[2])
 * 3  |  3 < 4     |   true                 |	3++       |  console.log(usersArray[3])
 * 4  |  4 < 4     |   false                |	          |
 */

// ? *******************************************************/
/**
 * While Loop
 * و هي شبيهة بال
 * for loop
 *
 * while (<condition>) {
 * 	<Code to repeat>;
 * }
 *
 * و فرق الاستخدام هو معرفة توقف التكرارات
 * i < usersArray.length
 * من المثال السابق وقت التوقف معروف و هو عندما نكرر بعدد العناصر في المصفوفة
 * و للتوضيح لنفترض اننا نريد كتابة كود يصنع ارقام عشوائة الى ان يصنع الرقم ثلاثة
 */
let isLoopRunning = true;
while (isLoopRunning) {
	randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log('Random Number:', randomNumber);
	if (randomNumber === 3) {
		console.log('Lucky number 3! Exiting the loop.');
		isLoopRunning = false;
	}
}
// ? *******************************************************/

// ? *******************************************************/
/**
 * For Of loop
 * و هي من انواع ال
 * for loop
 * صنعت لتسهيل استخدام التكرارات مع المصفوفات
 * و تستخدم مع المصفوفة فقط
 */

for (let i = 0; i < usersArray.length; i++) {
	console.log(usersArray[i]);
}
// VS
for (const element of usersArray) {
	console.log(element);
}
// ? *******************************************************/

// ? *******************************************************/
/**
 * For in Loop
 * و هي صنعت لتسهيل استخدام التكرارات مع ال
 * objects
 * و تستخدم مع ال
 * objects
 * فقط
 * for (const <variable that will hold keys / properties / attributes> in <object name>) {
 * <code to repeat>
 * }
 */

const randomUser = {
	name: 'Mutlaq',
	age: 23,
	hight: 172,
	weight: 112,
	technologies: ['NodeJS', 'NestJS', 'Angular', 'ReactJS'],
};
// لطباعة المعلومات الموجودة داخل ال object
for (const key in randomUser) {
	console.log(key);
	//  0 name
	//  1 age
	//  2 hight
	//  3 weight
	//  4 technologies
	console.log(randomUser[key]);
	//  0 Mutlaq
	//  1 23
	//  2 172
	//  3 112
	//  4 ['NodeJS', 'NestJS', 'Angular', 'ReactJS']
}
// ? *******************************************************/

// ? *******************************************************/
/**
 * Regular Functions
 * من الاشياء المتشابهة في جميع لغات البرمجة هي ال
 * functions
 * و هي عبارة عن جزء من الكود يمكن تنفيذه اكثر من مرة عن طريق استدعاء اسمه
 * مثال: في اي تطبيق تواصل اجتماعي يتم طلب ادخال كلمة سر في اكثر من مكان مثل صفحة تسجيل الدخول او انشاء حساب او في صفحة تعديل كلمة السر والخ
 * و بالتاكيد المطوريين لن يكرروا نفس الكود في اكثر من مكان
 * فبالتالي يمكن الاستنتاج بانه يصنعوا
 * function
 * واحد و يستدعوه في اكثر من مكان
 *
 * function <function name>() {
 * <code in function>;
 * }
 *
 * معنى
 * function
 * بالعربي هو دالة
 */

function checkPasswordLength() {
	//  تعريف function
	let password = 'mutlaq';
	if (password.length < 8) {
		console.log('BAD PASSWORD');
	}
}
checkPasswordLength(); // استدعاء function

/**
 * ولكن بهذا الشكل اضطررنا تعريف كلمة السر بانفسنا ماذا لو اردنا ان نجعل ال
 * function
 * يستقبل متغير
 *
 * function <function name>(<parameter 1>, <parameter 2>) {
 * <code in function>;
 * }
 */
function checkPasswordLengthWithParameters(password) {
	//  تعريف function
	if (password.length < 8) {
		console.log('BAD PASSWORD');
	} else {
		console.log('GOOD PASSWORD');
	}
}
checkPasswordLengthWithParameters('MutlaqAlsadeed'); // GOOD PASSWORD
checkPasswordLengthWithParameters('Mutl'); // BAD PASSWORD
checkPasswordLengthWithParameters('AHMED'); // BAD PASSWORD
checkPasswordLengthWithParameters('AHMEDKHALID'); // GOOD PASSWORD

// ? *******************************************************/

// ? *******************************************************/

/**
 * Return value and default params
 * و يمكن ايضا ارجاع قيمة من ال
 * function
 * عن طريق كلمة
 * return
 */

function calculateRectangleArea(length, width) {
	let area = length * width;
	return area;
}

let length = 5;
let width = 10;
let rectangleArea = calculateRectangleArea(length, width);

console.log('The area of the rectangle is:', rectangleArea);

/**
 * و ايضا يوجد ما يعرف ب
 * default parameters
 * وهي قيم نضعها في حال لم تتواجد قيم في ال
 * parameters
 */

function generateProfileLink(username, platform = 'Twitter') {
	const link = `https://www.${platform.toLowerCase()}.com/${username}`;
	return link;
}
let twitterProfileLink = generateProfileLink('mut1aq');
let instagramProfileLink = generateProfileLink('mut1aq', 'INSTAGRAM');
let facebookProfileLink = generateProfileLink('mut1aq', 'facebook');
let YouTubeProfileLink = generateProfileLink('mut1aq', 'YouTube');

console.log("User's Profile Link:", twitterProfileLink); // User's Profile Link: https://www.twitter.com/mut1aq
console.log("User's Profile Link:", instagramProfileLink); // User's Profile Link: https://www.instagram.com/mut1aq
console.log("User's Profile Link:", facebookProfileLink); // User's Profile Link: https://www.facebook.com/mut1aq
console.log("User's Profile Link:", YouTubeProfileLink); // User's Profile Link: https://www.youtube.com/mut1aq

// ? *******************************************************/

// ? *******************************************************/
/**
 * Function Scope
 * في جافاسكربت المتغير الذي يتم تعريفه في داخل ال
 * function
 * لا يمكن الوصول اليه من خارج ال
 * function
 */

let outSideFunctionLetVariable = 1;
const outSideFunctionConstVariable = 2;
var outSideFunctionVarVariable = 3;

function exampleFunction() {
	let insideFunctionLetVariable = 1;
	const insideFunctionConstVariable = 2;
	var insideFunctionVarVariable = 3;

	/**
	 * نستطيع اعادة تعريف متغير داخل ال
	 * Function
	 */
	let outSideFunctionLetVariable = 5; // OKAY block scope

	console.log(outSideFunctionLetVariable); // OKAY 5
	console.log(outSideFunctionConstVariable); // OKAY 2
	console.log(outSideFunctionVarVariable); // OKAY 3
}

// console.log(insideFunctionLetVariable); // NOT OKAY ReferenceError: insideFunctionLetVariable is not defined
// console.log(insideFunctionConstVariable); // NOT OKAY ReferenceError: insideFunctionConstVariable is not defined
// console.log(insideFunctionVarVariable); // NOT OKAY ReferenceError: insideFunctionVarVariable is not defined

exampleFunction();

// console.log(insideFunctionLetVariable); // NOT OKAY ReferenceError: insideFunctionLetVariable is not defined
// console.log(insideFunctionConstVariable); // NOT OKAY ReferenceError: insideFunctionConstVariable is not defined
// console.log(insideFunctionVarVariable); // NOT OKAY ReferenceError: insideFunctionVarVariable is not defined

/**
 * و نفس الكلام ينطبق على
 * function
 * داخل
 * function
 */
function outerFunction() {
	// Lexical scope
	let outerVariable = 'I am from outer function';

	function innerFunction() {
		console.log(outerVariable);
	}

	return innerFunction;
}

let closure = outerFunction();
closure(); // I am from outer function

// ? *******************************************************/

// ? *******************************************************/
/**
 * Anonymous Functions (function expression)
 * يمكننا ايضا تمرير و استدعاء
 * function
 * داخل
 * function
 */

function functionWithAFunctionAsAParameter(
	stringValue,
	numberValue,
	arrayValue,
	objectValue,
	functionValue
) {
	console.log(stringValue, numberValue, arrayValue, objectValue);
	functionValue(); // استدعاء
}
let stringVariable = 'I am a string';
let numberVariable = 502;
let arrayVariable = [1, 'hi', {name: 'Mutlaq'}];
let objectVariable = {purpose: 'Object Variable'};
functionWithAFunctionAsAParameter(
	stringVariable,
	numberVariable,
	arrayVariable,
	objectVariable,
	function () {
		// مررناه كقيمة
		console.log('THIS IS CALLED AN ANONYMOUS FUNCTION');
	}
);

/**
 * و يمكن تعريف ال
 * function
 * و تخزينه في متغير
 * و هذا يسمى ب
 * function expression
 */
const functionAsAVariable = function () {
	console.log("IT IS CALLED ANONYMOUS BECAUSE YOU CAN'T CALL IT BY NAME");
};
functionWithAFunctionAsAParameter(
	stringVariable,
	numberVariable,
	arrayVariable,
	objectVariable,
	functionAsAVariable
);
// ? *******************************************************/

// ? *******************************************************/
/**
 * Arrow Functions
 * وهي طريقة كتابة
 * functions
 * في جافاسكربت ولكن تميزت بشكلها البسيط و السريع
 *
 * (<parameter1>, <parameter2>, <parameter3>) => {
 * <code>;
 * }
 *
 * وفي حالة تنفيذ سطر واحد يمكن الاستغناء عن
 * {}
 *
 */

function multiplyByTwoTraditional(number) {
	return number * 2;
}

const multiplyByTwoArrowWithCurlyBrackets = (number) => {
	return number * 2;
};

const multiplyByTwoArrow = (number) => number * 2;

// Example usage
console.log(multiplyByTwoTraditional(5)); //  10
console.log(multiplyByTwoArrowWithCurlyBrackets(5)); //  10
console.log(multiplyByTwoArrow(5)); //  10
// ? *******************************************************/

// ? *******************************************************/
/**
 * Break vs Continue
 * و هم كلمات مفتاحية تستخدم بالعادة في ال
 * loops
 * ولكن ايضا يمكن استخدامهم بال
 * functions
 *
 * break
 * الخروج من ال
 * loop
 * بشكل نهائي و ينتقل الكود الى السطر الذي يلي ال
 * loop
 */
// Using break to exit a loop prematurely
for (let i = 1; i <= 5; i++) {
	console.log(i);
	if (i === 3) {
		break; // Exit the loop when i is 3
	}
}
// Output: 1, 2, 3

/**
 * continue
 * و تستخدم لكي نقفز الى التكرار الذي يليه دون تنفيذ الكود
 */

// Using continue to skip an iteration
for (let i = 1; i <= 5; i++) {
	if (i === 3 || i === 4) {
		continue; // Skip the current iteration when i is 3
	}
	console.log(i);
}
// Output: 1, 2, 5

// ? *******************************************************/

// ? *******************************************************/
/**
 * High Order Functions
 * و هم اي
 * function
 * ياخذ
 * function as a parameter => function (func) {}
 * او يرجع كقيمة
 * function
 * ثاني
 *
 */
function example(param) {
	return () => param * 2;
}
console.log(example(8)()); // 16

// ? *******************************************************/

// ? *******************************************************/
/**
 * array.map(function (element, index, array) {})
 * و هي احد ال
 * methods
 * في ال
 * Array
 * و مهمتها تنفيذ ال
 * function
 * الذي يكون في ال
 * parameters
 * على كل عناصر المصفوفة
 * و هي لا تغير محتوى ال
 * array
 * الاساسي
 */

const numbers = [10, 20, 30, 40, 50];
numbers.map(function (element, index, array) {
	console.log(element, index, array);
	// 			10         0    [10, 20, 30, 40, 50]
	// 			20         1    [10, 20, 30, 40, 50]
	// 			30         2    [10, 20, 30, 40, 50]
	// 			40         3    [10, 20, 30, 40, 50]
	// 			50         4    [10, 20, 30, 40, 50]
});
/**
 * و بالعادة نستخدم
 * arrow function
 * مكان ال
 * anonymous function
 */
numbers.map((element) => element * 2);
console.log(numbers); // [10, 20, 30, 40, 50]

console.log(numbers.map((element) => element * 2)); // [ 20, 40, 60, 80, 100 ]

// Using map to capitalize each string in an array
const words = ['apple', 'banana', 'cherry'];

const capitalizedWords = words.map((word) => word.toUpperCase());

console.log(capitalizedWords); //  ['APPLE', 'BANANA', 'CHERRY']

// Using map to extract names from an array of objects
const people = [
	{id: 1, name: 'Alice'},
	{id: 2, name: 'Bob'},
	{id: 3, name: 'Charlie'},
];

const names = people.map((person) => person.name);

console.log(names); // [ 'Alice', 'Bob', 'Charlie' ]

// ? *******************************************************/

// ? *******************************************************/
/**
 * array.filter
 * و استخدامها شبيه بال
 * array.map
 * array.filter(  (element, index, array) =>  {})
 */

// Using filter to create a new array with only odd numbers
const evenAndOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = evenAndOddNumbers.filter((number) => number % 2 === 1);

console.log(oddNumbers); //  [1, 3, 5, 7, 9]

// Using filter to create a new array with strings of length greater than 3
const wordsWithLongAndShortStrings = ['apple', 'banana', 'cherry', 'date', 'fig'];

const longWords = wordsWithLongAndShortStrings.filter((word) => word.length > 4);

console.log(longWords); //  ['apple', 'banana', 'cherry' ]

// Using filter to create a new array with people younger than 30
const oldPeopleAndYoungPeople = [
	{id: 1, name: 'Alice', age: 25},
	{id: 2, name: 'Bob', age: 32},
	{id: 3, name: 'Charlie', age: 28},
];

const youngPeople = oldPeopleAndYoungPeople.filter((person) => person.age < 30);

console.log(youngPeople); //   [{ id: 1, name: 'Alice', age: 25 }, { id: 3, name: 'Charlie', age: 28 }]

// ? *******************************************************/

// ? *******************************************************/
/**
 * array.reduce
 * و هو يستخدم لتقليص المصفوفة كاملة الى قيمة واحدة
 * array.reduce((total, currentValue, index, array) => {}, initialValueForTotal)
 */

// Using reduce to sum all numbers in an array
const numbersToSum = [1, 2, 3, 4, 5];

const sum = numbersToSum.reduce((total, currentValue) => total + currentValue, 0); // Initial value of the total is 0

console.log(sum); //  15

// Using reduce to concatenate strings in an array
const wordsToJoin = ['Hello', ' ', 'World', '!'];

const sentence = wordsToJoin.reduce((total, currentValue) => total + currentValue, ''); // Initial value of the accumulator is an empty string

console.log(sentence); //  'Hello World!'

// Using reduce to find the maximum value in an array
const numbersToFindMax = [5, 2, 8, 1, 4];

const max = numbersToFindMax.reduce(
	(accumulator, currentValue) => Math.max(accumulator, currentValue),
	Number.MIN_SAFE_INTEGER
); // Initial value of the accumulator is the smallest safe integer

console.log(max); //  8

// ? *******************************************************/

// ? *******************************************************/

/**
 * Spread
 * عندما نريد استخدام عناصر المصفوفة و ليس المصفوفة بذاتها يمكننا استخدام ال
 * spread
 * بهذا الشكل
 */

const numbersArrayToSpread = [1, 2, 3, 4, 5];

console.log(numbersArrayToSpread); // [ 1, 2, 3, 4, 5 ]
console.log(...numbersArrayToSpread); // 1 2 3 4 5

// و يمكن استخدامها لدمج مصفوفتان مع بعضهم

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); //   [1, 2, 3, 4, 5, 6]
console.log(...combinedArray); //  1 2 3 4 5 6

const numbersToPassInAFunction = [1, 2, 3, 4, 5];

function sumFunc(a, b, c, d, e) {
	return a + b + c + d + e;
}

const resultOfFunctionSum = sumFunc(...numbersToPassInAFunction);

console.log(resultOfFunctionSum); //   15

/**
 * و يمكن استخدامها بنفس الشكل لل
 * objects
 * ولكن يجب احاطتها ب
 * { }
 */

const object1 = {a: 1, b: 2};
const object2 = {b: 3, c: 4};
const mergedObject = {...object1, ...object2};

console.log(mergedObject); //   { a: 1, b: 3, c: 4 }

// ? *******************************************************/

// ? *******************************************************/
/**
 * Rest
 * و هي طريق لاخذ عدد لا نهائي من ال
 * parameters
 */

function infiniteParams(...params) {
	// params is passed as an array
	console.log(...params); // printing array elements
}
infiniteParams();
infiniteParams(1);
infiniteParams(1, 2);
infiniteParams(1, 2, 3);
infiniteParams(1, 2, 3, 4);
infiniteParams(1, 2, 3, 4, 5);
// ? *******************************************************/

// ? *******************************************************/
/**
 * Destructing
 * و هي طريقة لاخذ عناصر معينة من
 * array or object
 */

const arrayToDestruct = [1, 2, 3, {purpose: 'Object in array', course: 'NestJS'}];
const objectToDestruct = {name: 'Mutlaq', age: 23, degrees: ['']};

const [firstElement, secondElement, thirdElement, fourthElement] = arrayToDestruct;
const {name, age, degrees} = objectToDestruct;

console.log(firstElement, secondElement, thirdElement, fourthElement.course); // 1 2 3 NestJS
console.log(name, age, degrees); // Mutlaq 23 [ '' ]
// ? *******************************************************/

// ? *******************************************************/
/**
 * Optional Chaining
 * و هي من اهم خواص جافاسكربت و هي تسمح باستخدام متغيرات تحتمل عدم وجود قيمة
 */

function randomFunction() {
	let randomNumber = Math.floor(Math.random() * 10) + 1;
	let isRandomNumberEven = randomNumber % 2 === 0;

	if (isRandomNumberEven) return null;
	else return {name: 'Mutlaq', age: 23, degrees: ['']};
}
// TypeError: Cannot read properties of null (reading 'name')
// console.log(randomFunction().name); // اذا كان الناتج رقم زوجي قد يحدث error
console.log(randomFunction()?.name); // undefined if randomFunction returned null
//                          ^ مع وجود هذه الاشارة مستحيل يحدث ايررور لانها تعطي سماحة اذا وجد قيمة غير معرفة
// ? *******************************************************/

// ? *******************************************************/
/**
 * Nullish
 * و هي اعطاء قيمة افتراضية في حال كان متغير
 * null or undefined
 */

const undefinedVariable = undefined;
const nullVariable = null;

console.log((undefinedVariable ?? 'mutlaq').toUpperCase()); // MUTLAQ
console.log((undefinedVariable ?? 'alsadeed').toUpperCase()); // ALSADEED

// ? *******************************************************/

// ? *******************************************************/
/**
 * This
 * و هي كلمة مفتاحية في جافاسكربت و قد ترمز الى اكثر من قيمة
 */

console.log(this); // {}

// ******************************************

function regularFunction() {
	console.log(this); // global object
}

regularFunction();

// ******************************************

const myObject = {
	name: 'Mutlaq',
	career: 'Instructor',
	myMethod: function () {
		console.log(this); /**
		{
  			name: 'Mutlaq',
  			career: 'Instructor',
  			myMethod: [Function: myMethod]
		} 
		*/
	},
	print() {
		console.log(this.name, this.career); // Mutlaq Instructor
	},

	method1: function () {
		console.log(this);
		return this;
	},
	method2: function () {
		console.log(this);
	},
};

myObject.myMethod(); // Refers to myObject
myObject.print();
myObject.method1().method2(); // Both refer to myObject

// ******************************************

const arrowFunction = () => {
	console.log(this); // {} Refers to the value of this in the enclosing scope
	// THIS IS WHY WE DON'T USE ARROW FUNCTIONS IN CLASS METHODS
};

arrowFunction();
// ? *******************************************************/
