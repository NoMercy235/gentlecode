# GentleCode - WIP
Toy compiler which transforms a program written in the Gentlecode programming language (.gec file) to its Assembly equivalent (.asm file, version INTELx64). Let's see how this goes.

## How the language looks like:

```
please define myConst as 10;
please define myBool as true;
please define myString as "Hello, world!";
please print("Hi");
please print(myString);
```

#### Current workflow

- Read a .gec file
- Parse its content and get the tokens (lexer)
- Use the tokens to construct an Abstract Syntax Tree (AST)
- Generate the Assembly code based on the nodes in the tree and write it to the disk

That's it. After that you can run it as you would usually run any .asm file

```bash
➜  nasm -f elf64 myProgram.asm [-l myProgram.lst]                       
➜  gcc -no-pie -o myProgram myProgram.o                                
➜  ./myProgram
``` 
