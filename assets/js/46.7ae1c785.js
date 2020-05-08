(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{583:function(a,t,e){"use strict";e.r(t);var r=e(2),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"lombok插件-简化代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lombok插件-简化代码"}},[a._v("#")]),a._v(" lombok插件 简化代码")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://projectlombok.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("lombok"),e("OutboundLink")],1),a._v("\n  Project Lombok\n  Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java.\nNever write another getter or equals method again, with one annotation your class has a fully featured builder, Automate your logging variables, and much more.\n  Lombok项目是一个Java库，它会自动插入编辑器和构建工具中，Lombok提供了一组有用的注释，用来消除Java类中的大量样板代码。仅五个字符(@Data)就可以替换数百行代码从而产生干净，简洁且易于维护的Java类。\n  Lombok通过增加一些“处理程序”，可以让java变得简洁、快速。\n  Lombok能以简单的注解形式来简化java代码，提高开发人员的开发效率。例如开发中经常需要写的javabean，都需要花时间去添加相应的getter/setter，也许还要去写构造器、equals等方法，而且需要维护，当属性多时会出现大量的getter/setter方法，这些显得很冗长也没有太多技术含量，一旦修改属性，就容易出现忘记修改对应方法的失误。")]),a._v(" "),e("p",[a._v("  Lombok能通过注解的方式，在编译时自动为属性生成构造器、getter/setter、equals、hashcode、toString方法。出现的神奇就是在源码中没有getter和setter方法，但是在编译生成的字节码文件中有getter和setter方法。这样就省去了手动重建这些代码的麻烦，使代码看起来更简洁些。")]),a._v(" "),e("h3",{attrs:{id:"_1-引入jar包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入jar包"}},[a._v("#")]),a._v(" 1.引入jar包")]),a._v(" "),e("p",[a._v("引入插件lombok 自动的set/get/构造方法插件")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("projectlombok"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("groupId"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token generics"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("lombok"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("artifactId"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("dependency"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"_2-找到lombokjar包文件位置-以java方式运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-找到lombokjar包文件位置-以java方式运行"}},[a._v("#")]),a._v(" 2.找到lombokjar包文件位置 以java方式运行")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2020/3/image-2bd1b12e0041491ab1c25d89b3ceab8d.png",alt:"image.png"}})]),a._v(" "),e("h3",{attrs:{id:"_3-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令"}},[a._v("#")]),a._v(" 3.命令:")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2020/3/image-25ea6cb0fe704751bf0efd0e5f425ac5.png",alt:"image.png"}}),a._v("\n之后点击install/update即可\n在eclipse安装的根目录下会生成lombok.jar包文件,表示插件安装成功.\n"),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2020/3/image-0be5f4eabff74481a5fa694174e65640.png",alt:"image.png"}})]),a._v(" "),e("h3",{attrs:{id:"_4-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置"}},[a._v("#")]),a._v(" 4.配置")]),a._v(" "),e("p",[a._v("在文件安装的根目录找到SpringToolSuite4.ini中\n手动在ini文件中最后一行添加\n-vmargs -javaagent:lombok.jar")]),a._v(" "),e("p",[a._v("安装完成后重启Eclipse即可")]),a._v(" "),e("h3",{attrs:{id:"_5-常用注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用注解"}},[a._v("#")]),a._v(" 5.常用注解")]),a._v(" "),e("p",[a._v("Lombok主要常用的注解有：@Data,@getter,@setter,@NoArgsConstructor,@AllArgsConstructor,@ToString,@EqualsAndHashCode,@Slf4j,@Log4j。我们一个一个来看：")]),a._v(" "),e("p",[a._v("@Data注解：在JavaBean或类JavaBean中使用，这个注解包含范围最广，它包含getter、setter、NoArgsConstructor注解，即当使用当前注解时，会自动生成包含的所有方法；")]),a._v(" "),e("p",[a._v("@getter注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的getter方法；")]),a._v(" "),e("p",[a._v("@setter注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的setter方法；")]),a._v(" "),e("p",[a._v("@NoArgsConstructor注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的无参构造方法；")]),a._v(" "),e("p",[a._v("@AllArgsConstructor注解：在JavaBean或类JavaBean中使用，使用此注解会生成对应的有参构造方法；")]),a._v(" "),e("p",[a._v("@ToString注解：在JavaBean或类JavaBean中使用，使用此注解会自动重写对应的toStirng方法；")]),a._v(" "),e("p",[a._v("@EqualsAndHashCode注解：在JavaBean或类JavaBean中使用，使用此注解会自动重写对应的equals方法和hashCode方法；")]),a._v(" "),e("p",[a._v("@Slf4j：在需要打印日志的类中使用，当项目中使用了slf4j打印日志框架时使用该注解，会简化日志的打印流程，只需调用info方法即可；")]),a._v(" "),e("p",[a._v("@Log4j：在需要打印日志的类中使用，当项目中使用了log4j打印日志框架时使用该注解，会简化日志的打印流程，只需调用info方法即可；")]),a._v(" "),e("p",[a._v("在使用以上注解需要处理参数时，处理方法如下（以@ToString注解为例，其他注解同@ToString注解）：")]),a._v(" "),e("p",[a._v('@ToString(exclude="column")')]),a._v(" "),e("p",[a._v("意义：排除column列所对应的元素，即在生成toString方法时不包含column参数；")]),a._v(" "),e("p",[a._v('@ToString(exclude={"column1","column2"})')]),a._v(" "),e("p",[a._v("意义：排除多个column列所对应的元素，其中间用英文状态下的逗号进行分割，即在生成toString方法时不包含多个column参数；")]),a._v(" "),e("p",[a._v('@ToString(of="column")')]),a._v(" "),e("p",[a._v("意义：只生成包含column列所对应的元素的参数的toString方法，即在生成toString方法时只包含column参数；；")]),a._v(" "),e("p",[a._v('@ToString(of={"column1","column2"})\n意义：只生成包含多个column列所对应的元素的参数的toString方法，其中间用英文状态下的逗号进行分割，即在生成toString方法时只包含多个column参数；\n@Accessors(chain=true)\n链式加载')]),a._v(" "),e("h3",{attrs:{id:"可能问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能问题"}},[a._v("#")]),a._v(" 可能问题")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2020/3/image-e3803a1ea7cd48f79d857b2a00fbe985.png",alt:"image.png"}}),a._v("\nsts安装lombok后重启时，如报以上错误，是没有找到jdk的安装路径\n解决：\n在SpringToolSuite4.ini中加入如下代码：\n"),e("img",{attrs:{src:"http://www.zhangpeng.fun/upload/2020/3/image-7000f78eee3a4955ba436dcf5597926a.png",alt:"image.png"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);