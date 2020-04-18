# GentleCode - WIP
Toy programming language which transforms a .gec file to .asm (INTEL). Let's see how this goes.

## How the language looks like:

```
please add 10, 20
please define now myConstant ::= 3;
please define future myVar;

myVar ::= please add(myConstant, 10);
```

#### First steps

- [ ] Read a file in the .gec format and return a list of tokens
- [ ] Parse the tokens and return an AST (Abstract Syntax Tree)
- [ ] Turn the AST into an executable .asm file and write it to disk

The initial supported operations will be addition, subtraction of integers.