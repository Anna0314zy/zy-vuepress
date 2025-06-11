---
title: Dart 语法的系统总结
tags:
   - flutter
---





## ✅ 一、基础语法

### 1. 变量声明

```dart
var name = 'John';      // 自动类型推断
String name = 'John';   // 显式声明类型
final age = 30;         // 运行时常量（不可修改）
const pi = 3.14;        // 编译时常量（不可修改）
```

### 2. 数据类型

* `int`, `double`, `num`, `String`, `bool`
* `dynamic`：运行时确定类型
* `var`：编译时推断类型
* `List`, `Set`, `Map`

---

## ✅ 二、流程控制

### 1. 条件判断

```dart
if (age > 18) {
  print('Adult');
} else if (age == 18) {
  print('Just 18');
} else {
  print('Minor');
}
```

### 2. switch 语句

```dart
switch (value) {
  case 1:
    print('One');
    break;
  default:
    print('Default');
}
```

### 3. 循环

```dart
for (var i = 0; i < 5; i++) {
  print(i);
}

while (true) {
  break;
}

do {
  print('Run once');
} while (false);
```

---

## ✅ 三、集合类型

### 1. 列表 List

```dart
var list = [1, 2, 3];
list.add(4);
list.removeAt(0);
```

### 2. 集合 Set

```dart
var s = <int>{1, 2, 3};
s.add(4);
```

### 3. 映射 Map

```dart
var map = {'name': 'John', 'age': 30};
map['gender'] = 'male';
```

---

## ✅ 四、函数 Function

```dart
int add(int a, int b) {
  return a + b;
}

void greet([String name = 'Guest']) {
  print('Hello $name');
}

void log({String? tag, String? msg}) {
  print('[$tag] $msg');
}

var multiply = (int a, int b) => a * b;
```

---

## ✅ 五、类与对象

```dart
class Person {
  String name;
  int age;

  // 构造函数
  Person(this.name, this.age);

  // 命名构造函数
  Person.withName(this.name) : age = 0;

  // 方法
  void sayHello() {
    print('Hello, I am $name');
  }
}
```

### 继承与重写

```dart
class Student extends Person {
  String school;

  Student(String name, int age, this.school) : super(name, age);

  @override
  void sayHello() {
    print('Hello, I study at $school');
  }
}
```

---

## ✅ 六、异步编程

### Future 异步函数

```dart
Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 2));
  return 'Done';
}

void main() async {
  print(await fetchData());
}
```

### Stream 流式数据

```dart
Stream<int> counter() async* {
  for (int i = 0; i < 3; i++) {
    yield i;
  }
}

void main() async {
  await for (var value in counter()) {
    print(value);
  }
}
```

---

## ✅ 七、其他关键特性

### 空安全

```dart
String? name; // 可以为 null
name = null;
```

### 操作符

* `??`：空值合并（如果前面的值为 null，则返回后面的值）
* `??=`：赋默认值
* `!`：非空断言
* `?..`：安全调用

```dart
String? name;
print(name ?? 'Unknown');
```

---



## ✅ 条件判断（`if`, `else if`, `else`）

```dart
int x = 10;

if (x > 0) {
  print('x is positive');
} else if (x == 0) {
  print('x is zero');
} else {
  print('x is negative');
}
```

---

## ✅ 类型转换（Type Conversion）

### 1. **基础类型转换**

```dart
// String → int
int a = int.parse('123');

// String → double
double b = double.parse('3.14');

// int → String
String c = 123.toString();

// double → String
String d = 3.14.toString();

// double → int
int e = 3.14.toInt();
```

### 2. **类型检查与转换（`is`, `as`, `is!`）**

```dart
var obj = 'hello';

if (obj is String) {
  print(obj.length); // 类型安全地访问
}

(obj as String).toUpperCase(); // 强制转换
```

---

## ✅ 算术运算符

| 运算符  | 说明            | 示例        |
| ---- | ------------- | --------- |
| `+`  | 加法            | `2 + 3`   |
| `-`  | 减法            | `5 - 2`   |
| `*`  | 乘法            | `3 * 4`   |
| `/`  | 除法（返回 double） | `10 / 4`  |
| `~/` | 整除（返回 int）    | `10 ~/ 4` |
| `%`  | 取余            | `10 % 3`  |

---

## ✅ 关系运算符（返回布尔值）

| 运算符  | 说明   | 示例       |
| ---- | ---- | -------- |
| `==` | 相等   | `a == b` |
| `!=` | 不等   | `a != b` |
| `>`  | 大于   | `a > b`  |
| `<`  | 小于   | `a < b`  |
| `>=` | 大于等于 | `a >= b` |
| `<=` | 小于等于 | `a <= b` |

---

## ✅ 赋值运算符

| 运算符   | 示例        | 说明              |
| ----- | --------- | --------------- |
| `=`   | `a = b`   | 赋值              |
| `+=`  | `a += b`  | 等同于 `a = a + b` |
| `-=`  | `a -= b`  | 等同于 `a = a - b` |
| `*=`  | `a *= b`  |                 |
| `/=`  | `a /= b`  |                 |
| `~/=` | `a ~/= b` | 整除赋值            |
| `%=`  | `a %= b`  |                 |

---

## ✅ 条件表达式

### 1. **三目运算符（类似 JavaScript）**

```dart
int age = 20;
String result = age >= 18 ? 'Adult' : 'Minor';
print(result);
```

### 2. **空判断运算符（??, ??=）**

```dart
String? name;

// 如果 name 为 null，就赋值为 'Guest'
String displayName = name ?? 'Guest';

// 如果 name 为 null，就将 name 赋值为 'Guest'
name ??= 'Guest';
```

### 3. **空安全成员访问（?.）**

```dart
Person? p;
print(p?.name); // p 不为 null 才会访问 name
```




