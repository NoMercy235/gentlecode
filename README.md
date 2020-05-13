# GentleCode - WIP
Toy programming language which transforms a .gec file to .asm (INTEL). Let's see how this goes.

## How the language looks like:

```
please define myConst as 10;
please define myBool as true;
please define myString as "Hello, world!";
please print("Hi");
please print(myString);
```

#### First steps

- [ ] Read a file in the .gec format and return a list of tokens
- [ ] Parse the tokens and return an AST (Abstract Syntax Tree)
- [ ] Turn the AST into an executable .asm file and write it to disk

The initial supported operations will be addition, subtraction of integers.