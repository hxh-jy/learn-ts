let arra: Array<number> =[112,32]

interface Foo {
    bar: number;
    bas: string;
  }
  
const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';