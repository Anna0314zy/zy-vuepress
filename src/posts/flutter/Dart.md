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

### ✅ 1. `final`：运行时常量

* **含义**：只能赋值一次，但值是在**运行时**确定的。
* **用法场景**：当你在运行时才能获取值，比如网络请求、时间戳、用户输入等。
* **示例**：

```dart
final DateTime now = DateTime.now(); // 合法
final name = getUserName();          // 只要赋值一次就可以
```

---

### ✅ 2. `const`：编译时常量

* **含义**：在**编译时就必须确定**值，且在整个生命周期内不可改变。
* **用法场景**：适合定义固定不变的值，如字符串字面量、固定配置等。
* **示例**：

```dart
const pi = 3.14159;        // 编译时常量
const name = "flutter";    // 字面量

// 可以嵌套使用
const list = [1, 2, 3];
```

---

####  🚫 区别总结：

| 特性                | `const`               | `final`                      |
| ----------------- | --------------------- | ---------------------------- |
| 何时赋值              | 编译时                   | 运行时                          |
| 是否可变              | ❌ 不可变                 | ❌ 不可变                        |
| 使用限制              | 值必须在编译时可知             | 值只需运行时确定                     |
| 示例                | `const a = 10;`       | `final a = getValue();`      |
| Flutter Widget 示例 | `const Text("hello")` | `final text = Text("hello")` |

---

####  ✅ Flutter 中使用建议

* 如果你要定义的值是固定字面量（如 Text 中的字符串、颜色等），**优先用 `const`**。
* 如果你要用的是函数返回值或运行中创建的变量，**使用 `final`**。

---

####  🚀 进阶提示：构造函数中的 `const`

```dart
const myWidget = MyWidget(); // 若 MyWidget 是 const 构造函数
```

这能提升性能，避免重复构建 widget。

---

### 一、`var` 的含义

* `var` 表示**根据赋值自动推断类型**。
* 变量必须**立即赋值**，否则会报错。
* **不是动态类型**：一旦赋值，其类型就确定了。

```dart
var name = 'Tom';     // 推断为 String
name = 'Jerry';       // ✅ 可以继续赋值为 String
// name = 123;        // ❌ 报错，不能赋值为 int
```

---

### 二、`late` 的含义

* `late` 表示**延迟初始化**变量，也就是说**不需要立即赋值**。
* 一般用于 `final` 或 明确类型 的变量。
* 用在你**确定之后一定会赋值**，但又**暂时没法赋值**的场景。
* 比如：依赖注入、生命周期初始化后再赋值等。

```dart
late String name;      // 声明但不立即赋值
name = 'Flutter';      // 稍后初始化
print(name);           // ✅ 正常使用
```

如果你声明了 `late` 但一直没赋值，就访问它，会抛出 `LateInitializationError`。

---

### 三、`late final`

* 组合使用：表示**只能赋值一次的延迟初始化变量**。
* 用于那些需要懒加载、但又只读的值。

```dart
late final int value;
value = 42;           // ✅ 第一次赋值
// value = 100;       // ❌ 第二次赋值会报错
```

---

#### 四、对比总结

| 关键字          | 是否需要立即赋值 | 是否可以修改    | 是否可变类型        | 典型用途        |
| ------------ | -------- | --------- | ------------- | ----------- |
| `var`        | ✅ 是      | ✅ 是       | ❌ 否（类型确定）     | 普通局部变量      |
| `final`      | ✅ 是      | ❌ 否       | ❌ 否           | 常量值         |
| `late`       | ❌ 否      | ✅（视配合的修饰） | ✅（要看是否 final） | 延迟初始化       |
| `late final` | ❌ 否      | ❌ 否       | ❌ 否           | 延迟赋值一次、只读变量 |

---

#### 五、什么时候该用哪一个？

* 变量立刻有值 → 用 `var` 或 `final`
* 变量不能立即赋值，但保证将来一定赋值 → 用 `late` 或 `late final`
* 动态类型（不推荐） → `dynamic` 或 `var name;`（未赋值）

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




