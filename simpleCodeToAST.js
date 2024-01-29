// There is a concept named "AST" and "parsing" which I see everywhere. 
// With the help of A.I. (it almost did everything for me) I have generated a detailed representation of what happens in the background in order to understand Javascript's behaviour.

function greet(name) {
  console.log("Hello, " + name + "!");
}

/*{
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "greet",
          "start": 9,
          "end": 14
        },
        "params": [
          {
            "type": "Identifier",
            "name": "name",
            "start": 15,
            "end": 19
          }
        ],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "name": "console",
                        "start": 25,
                        "end": 32
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "log",
                        "start": 33,
                        "end": 36
                      },
                      "computed": false,
                      "start": 25,
                      "end": 36
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "log",
                      "start": 37,
                      "end": 40
                    },
                    "computed": false,
                    "start": 25,
                    "end": 40
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "call",
                    "start": 41,
                    "end": 45
                  },
                  "computed": false,
                  "start": 25,
                  "end": 45
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Hello, ",
                    "start": 46,
                    "end": 54
                  },
                  {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "value": "Hello, ",
                        "start": 46,
                        "end": 54
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "name",
                        "start": 57,
                        "end": 61
                      },
                      "start": 46,
                      "end": 61
                    },
                    "right": {
                      "type": "Literal",
                      "value": "!",
                      "start": 64,
                      "end": 67
                    },
                    "start": 46,
                    "end": 67
                  }
                ],
                "start": 25,
                "end": 68
              },
              "start": 25,
              "end": 69
            }
          ],
          "start": 23,
          "end": 71
        },
        "generator": false,
        "async": false,
        "expression": false,
        "start": 0,
        "end": 71
      }
    ],
    "sourceType": "module",
    "start": 0,
    "end": 71
  }*/
