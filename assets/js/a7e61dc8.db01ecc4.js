"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["4122"],{64595:function(e,n,r){r.r(n),r.d(n,{assets:function(){return i},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return t},toc:function(){return l}});var t=r(6341),a=r(85893),o=r(50065);let s={title:"\u7528 Golang \u64B8\u4E00\u4E2A\u73A9\u5177\u7F16\u8BD1\u5668",date:new Date("2020-05-29T13:40:06.000Z"),tags:["coding","note"]},d=void 0,i={authorsImageUrls:[]},l=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"Parsing",id:"parsing",level:2},{value:"Lexical Analysis",id:"lexical-analysis",level:3},{value:"Syntactic Analysis",id:"syntactic-analysis",level:3},{value:"Transformation",id:"transformation",level:2},{value:"Traverser",id:"traverser",level:3},{value:"Transformer",id:"transformer",level:3},{value:"Code Generation",id:"code-generation",level:2},{value:"Compiler",id:"compiler",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u793E\u755C\u4EE5\u6765\u6BCF\u65E5\u642C\u7816\uFF0C\u5F88\u4E45\u6CA1\u6709\u50CF\u8BFB\u4E66\u65F6\u4E00\u6837\u5B66\u4E60\u4E00\u4E9B\u4E1C\u897F\u6C89\u6DC0\u4E0B\u4E86\u3002\u6700\u8FD1\u5728 GitHub \u4E0A\u770B\u5230 ",(0,a.jsx)(n.a,{href:"https://github.com/jamiebuilds/the-super-tiny-compiler",children:"the-super-tiny-compiler"})," \u8FD9\u4E2A\u9879\u76EE\uFF0C\u5F88\u559C\u6B22\u5B83\u6781\u7B80\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\uFF0C\u4E5F\u7ED9\u4E86\u5BF9\u7F16\u8BD1\u539F\u7406\u4E00\u77E5\u534A\u89E3\u7684\u6211\u4E00\u4E2A\u4ECE\u5934\u518D\u6765\u7684\u673A\u4F1A\u3002\u4E2A\u4EBA\u611F\u89C9\u539F\u9879\u76EE\u7528 JavaScript \u62B9\u53BB\u4E86\u4E00\u4E9B\u5B9E\u73B0\u7EC6\u8282\u7684\u540C\u65F6\u4E5F\u6A21\u7CCA\u4E86\u5177\u4F53\u7684\u7406\u89E3\uFF0C\u6545\u6B64\u7528 Golang \u5B66\u4E60\u4E0E\u5B9E\u73B0\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,a.jsxs)(n.p,{children:["\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u7684\u73A9\u5177\u7F16\u8BD1\u5668\u662F\u5C06 lisp \u98CE\u683C\u7684\u4EE3\u7801\u8F6C\u5316\u4E3A C \u8BED\u6CD5\uFF0C\u4F8B\u5982 ",(0,a.jsx)(n.code,{children:"(add 2 (subtract 4 2))"})," \u4F1A\u88AB\u8F6C\u5316\u6210 ",(0,a.jsx)(n.code,{children:"add(2, subtract(4, 2));"}),"\u3002\u5927\u90E8\u5206\u73B0\u4EE3\u7F16\u8BD1\u5668\u5DE5\u4F5C\u4E3B\u8981\u6709\u4E09\u4E2A\u8FC7\u7A0B\uFF1A"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Parsing\uFF1A\u5C06\u6E90\u4EE3\u7801\u89E3\u6790\u4E3A\u62BD\u8C61\u8868\u8FBE\uFF08\u5982\u62BD\u8C61\u8BED\u6CD5\u6811 Abstract syntax tree\uFF09"}),"\n",(0,a.jsx)(n.li,{children:"Transformation\uFF1A\u64CD\u4F5C AST \u5E76\u505A\u4E00\u4E9B\u7F16\u8BD1\u5668\u9700\u8981\u7684\u5DE5\u4F5C"}),"\n",(0,a.jsx)(n.li,{children:"Code Generation\uFF1A\u5C06\u53D8\u5F62\u540E\u7684\u4EE3\u7801\u751F\u6210\u65B0\u7684\u4EE3\u7801"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6309\u7167\u6211 iOS \u7684\u7ECF\u9A8C\uFF0C\u8FD9\u5927\u6982\u5BF9\u5E94\u7684\u662F\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Clang \u5BF9 C/C++/Objective-C/Swift \u4EE3\u7801\u8FDB\u884C\u8BCD\u6CD5\u5206\u6790\u3001\u9759\u6001\u5206\u6790\u7B49\uFF0C\u751F\u6210 AST ",(0,a.jsx)(n.code,{children:"clang -Xclang -ast-dump"})]}),"\n",(0,a.jsxs)(n.li,{children:["Clang \u5C06 AST \u751F\u6210 LLVM \u4E2D\u95F4\u4EE3\u7801\u5E76\u8FDB\u884C\u7F16\u8BD1\u4F18\u5316\uFF0C\u4F8B\u5982\u5168\u5C40\u53D8\u91CF\u3001\u5FAA\u73AF\u3001\u5C3E\u9012\u5F52\u7B49\u60C5\u51B5 ",(0,a.jsx)(n.code,{children:"clang -emit-llvm"})]}),"\n",(0,a.jsxs)(n.li,{children:["Clang \u5C06\u4F18\u5316\u540E\u7684 LLVM \u4EE3\u7801\u751F\u6210\u6C47\u7F16\u4EE3\u7801 ",(0,a.jsx)(n.code,{children:"clang -S -o"}),"\uFF0Cassembler \u5C06\u6C47\u7F16\u4EE3\u7801\u751F\u6210\u673A\u5668\u7801\uFF0Clinker \u5C06\u673A\u5668\u7801\u548C\u9759\u6001\u5E93\u94FE\u63A5\u751F\u6210 Mach-O \u53EF\u6267\u884C\u6587\u4EF6"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"parsing",children:"Parsing"}),"\n",(0,a.jsx)(n.p,{children:"\u89E3\u6790\u4E3B\u8981\u662F\u8BCD\u6CD5\u5206\u6790\uFF08lexical analysis\uFF09\u548C\u53E5\u6CD5\u5206\u6790\uFF08syntactic analysis\uFF09\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"lexical-analysis",children:"Lexical Analysis"}),"\n",(0,a.jsxs)(n.p,{children:["\u8BCD\u6CD5\u5206\u6790\u4E2D tokenizer \u5C06\u539F\u59CB\u4EE3\u7801\u62C6\u5206\u6210 token\uFF08\u6216 lexer\uFF09\u3002\u6BD4\u5982 ",(0,a.jsx)(n.code,{children:"(add 2 4)"})," \u4F1A\u88AB\u89E3\u6790\u4E3A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"[\n    {\n        type: 'paren', value: '(',\n    }, {\n        type: 'name', value: 'add',\n    }, {\n        type: 'number', value: '2',\n    }, {\n        type: 'number', value: '4',\n    }, {\n        type: 'paren', value: ')',\n    }\n]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8FD9\u91CC\u6211\u4EEC\u5B9A\u4E49 token \u5305\u62EC\u4E24\u4E2A\u5C5E\u6027\uFF1Atype \u548C value\u3002\u9996\u5148\u58F0\u660E\u6211\u4EEC\u9700\u8981\u7684 token type \u548C\u7ED3\u6784\u4F53\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'type TokenType string\n\nconst (\n    TokenTypeParen  TokenType = "paren"\n    TokenTypeName   TokenType = "name"\n    TokenTypeNumber TokenType = "number"\n    TokenTypeString TokenType = "string"\n)\n\ntype Token struct {\n    tokenType TokenType\n    value     string\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Tokenizer \u51FD\u6570\u63A5\u53D7 input \u5B57\u7B26\u4E32\uFF0C\u904D\u5386\u5E76\u6839\u636E\u5F53\u524D\u5B57\u7B26\u751F\u6210 token\uFF0C\u6700\u540E\u8FD4\u56DE token \u6570\u7EC4\u3002\u8FD9\u91CC\u6211\u4EEC\u5229\u7528\u4E86 Golang \u7684 ",(0,a.jsx)(n.code,{children:"unicode"})," \u5305\u5B9E\u73B0\u5FEB\u901F\u7684\u5224\u65AD\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'func Tokenizer(input string) []Token {\n    // counter\n    current := 0\n    // token array to be returned\n    tokens := make([]Token, 0)\n    // iterate\n    for current < len(input) {\n        char := input[current]\n        charStr := string(char)\n        if charStr == "(" || charStr == ")" {\n            tokens = append(tokens, Token{TokenTypeParen, charStr})\n            current++\n            continue\n        }\n\n        charRune := rune(char)\n        if unicode.IsSpace(charRune) {\n            current++\n            continue\n        }\n\n        if unicode.IsDigit(charRune) {\n            value := ""\n            for unicode.IsDigit(rune(char)) {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n            tokens = append(tokens, Token{TokenTypeNumber, value})\n            continue\n        }\n\n        if charStr == "\\"" {\n            value := ""\n            // skip opening parenthesis\n            current++\n            char = input[current]\n\n            // for characters that are not "\\"", append to value of current token\n            for string(char) != "\\"" {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n\n            // skip closing parenthesis\n            current++\n            char = input[current]\n\n            tokens = append(tokens, Token{TokenTypeString, value})\n            continue\n        }\n\n        if unicode.IsLetter(charRune) {\n            value := ""\n            for unicode.IsLetter(rune(char)) {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n            tokens = append(tokens, Token{TokenTypeName, value})\n            continue\n        }\n    }\n    return tokens\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"syntactic-analysis",children:"Syntactic Analysis"}),"\n",(0,a.jsxs)(n.p,{children:["\u53E5\u6CD5\u5206\u6790\u5C06 token \u6570\u7EC4\u89E3\u6790\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811\u3002\u987E\u540D\u601D\u4E49\uFF0CAST \u662F\u6811\u72B6\u7ED3\u6784\uFF0C\u4F8B\u5982\u4E0A\u6587\u7684 ",(0,a.jsx)(n.code,{children:"(add 2 4)"})," \u89E3\u6790\u800C\u6765\u7684 token \u6570\u7EC4\u4F1A\u88AB\u8FDB\u4E00\u6B65\u89E3\u6790\u4E3A AST \u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n    type: 'Program',\n    params: [{\n        type: 'CallExpression',\n        value: 'add',\n        params: [{\n            type: 'NumberLiteral',\n            value: '2',\n        }, {\n            type: 'NumberLiteral',\n            value: '4',\n        }],\n    }],\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["AST \u7684\u6BCF\u4E2A\u8282\u70B9\u53EF\u5B9A\u4E49\u5982\u4E0B\uFF0C\u6CE8\u610F ",(0,a.jsx)(n.code,{children:"params"})," \u6211\u4EEC\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u6307\u9488\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u6307\u5411 ",(0,a.jsx)(n.code,{children:"ASTNode"})," \u7684\u6307\u9488\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'type ASTNodeType string\n\nconst (\n    ASTNodeTypeProgram             ASTNodeType = "Program"\n    ASTNodeTypeNumberLiteral       ASTNodeType = "NumberLiteral"\n    ASTNodeTypeStringLiteral       ASTNodeType = "StringLiteral"\n    ASTNodeTypeCallExpression      ASTNodeType = "CallExpression"\n    ASTNodeTypeExpressionStatement ASTNodeType = "ExpressionStatement"\n)\n\ntype ASTNode struct {\n    nodeType   ASTNodeType\n    value      string\n    params     []*ASTNode\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Parser \u51FD\u6570\u63A5\u53D7 token \u6570\u7EC4\u5E76\u8FD4\u56DE AST \u6839\u7ED3\u70B9\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func Parser(tokens []Token) ASTNode {\n    current := 0\n\n    // recursively walk through nodes\n    var walk func() ASTNode\n    // ...\n\n    // create root node\n    ast := ASTNode{\n        nodeType: ASTNodeTypeProgram,\n    }\n    // push nodes to ast.params\n    for current < len(tokens) {\n        tmp := walk()\n        ast.params = append(ast.params, &tmp)\n    }\n    return ast\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4E2D\u95F4\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A\u95ED\u5305 ",(0,a.jsx)(n.code,{children:"walk()"})," \u6765\u6839\u636E ",(0,a.jsx)(n.code,{children:"current"})," \u628A Token \u89E3\u6790\u4E3A ASTNode\u3002\u9884\u5148\u58F0\u660E\u95ED\u5305\u7684\u539F\u56E0\u662F Golang \u4E0D\u5141\u8BB8\u901A\u8FC7\u6D77\u8C61\u8FD0\u7B97\u7B26\uFF08:=\uFF09\u58F0\u660E\u7684\u95ED\u5305\u8C03\u7528\u81EA\u5DF1\u3002",(0,a.jsx)(n.code,{children:"walk"})," \u95ED\u5305\u5B9E\u73B0\u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'walk = func() ASTNode {\n    token := tokens[current]\n\n    if token.tokenType == TokenTypeNumber {\n        current++\n        return ASTNode{\n            nodeType: ASTNodeTypeNumberLiteral,\n            value:    token.value,\n        }\n    }\n\n    if token.tokenType == TokenTypeString {\n        current++\n        return ASTNode{\n            nodeType: ASTNodeTypeStringLiteral,\n            value:    token.value,\n        }\n    }\n\n    if token.tokenType == TokenTypeParen && token.value == "(" {\n        // skip opening parenthesis\n        current++\n        token = tokens[current]\n\n        node := ASTNode{\n            nodeType: ASTNodeTypeCallExpression,\n            value:    token.value,\n            params:   []*ASTNode{},\n        }\n        // skip name token\n        current++\n        token = tokens[current]\n\n        for token.tokenType != TokenTypeParen || (token.tokenType == TokenTypeParen && token.value != ")") {\n            tmp := walk()\n            node.params = append(node.params, &tmp)\n            token = tokens[current]\n        }\n\n        // skip closing parenthesis\n        current++\n        return node\n    }\n\n    // Should not get here\n    return ASTNode{}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"transformation",children:"Transformation"}),"\n",(0,a.jsx)(n.p,{children:"\u771F\u5B9E\u7684\u7F16\u8BD1\u5668\u53EF\u80FD\u4F1A\u8FDB\u884C\u5F88\u591A\u4F18\u5316\u5E76\u751F\u6210\u4E2D\u95F4\u4EE3\u7801\uFF0C\u4F46\u5728\u73A9\u5177\u7F16\u8BD1\u5668\u91CC\u6211\u4EEC\u53EA\u662F\u64CD\u4F5C AST\uFF0C\u8FDB\u884C\u4E00\u4E9B\u6539\u52A8\u5E76\u751F\u6210\u65B0\u7684 AST\u3002\u4E00\u822C\u6765\u8BF4\u4E5F\u53EF\u4EE5\u76F4\u63A5\u66F4\u6539\u539F\u59CB AST\uFF0C\u4F46\u9274\u4E8E\u6211\u4EEC\u662F target \u53E6\u4E00\u79CD\u8BED\u8A00\uFF08lisp -> C\uFF09\u6211\u4EEC\u8FD8\u662F\u521B\u5EFA\u4E00\u68F5\u65B0\u7684 AST\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"traverser",children:"Traverser"}),"\n",(0,a.jsxs)(n.p,{children:["\u4E3A\u4E86\u64CD\u4F5C AST\uFF0C\u6211\u4EEC\u9700\u8981 traverser \u53BB\u6DF1\u5EA6\u4F18\u5148\u904D\u5386 AST\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u7C7B\u578B\u7684\u8282\u70B9\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\u3002\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u4E00\u4E2A map\uFF0Ckey \u662F\u8282\u70B9\u7684\u7C7B\u578B\uFF0Cvalue \u662F\u6211\u4EEC\u9700\u8981\u6267\u884C\u7684\u64CD\u4F5C\u3002\u5BF9\u4E8E\u6BCF\u4E2A\u8282\u70B9\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u5F00\u59CB\u904D\u5386\u8282\u70B9\u65F6\uFF08enter\uFF09\u4EE5\u53CA\u7ED3\u675F\u904D\u5386\u5176\u5B50\u6811\u65F6\uFF08exit\uFF09\u6267\u884C\uFF0C\u56E0\u6B64\u6211\u4EEC\u58F0\u660E\u4E00\u4E2A ",(0,a.jsx)(n.code,{children:"Methods"})," \u7ED3\u6784\u4F53\uFF0C\u5177\u6709 ",(0,a.jsx)(n.code,{children:"enter"})," \u548C ",(0,a.jsx)(n.code,{children:"exit"})," \u4E24\u4E2A\u95ED\u5305\u5C5E\u6027\uFF0C\u6BCF\u4E2A\u95ED\u5305\u63A5\u53D7 ",(0,a.jsx)(n.code,{children:"node"})," \u548C ",(0,a.jsx)(n.code,{children:"parent"})," \u4E24\u4E2A\u53C2\u6570\u8868\u793A\u5F53\u524D\u8282\u70B9\u548C\u7236\u8282\u70B9\u3002\u7531\u4E8E\u95ED\u5305\u9700\u8981\u5BF9\u8282\u70B9\u8FDB\u884C\u6539\u52A8\uFF0C\u7C7B\u578B\u4E3A\u6307\u5411\u8282\u70B9\u7684\u6307\u9488\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"type Methods struct {\n    enter func(*ASTNode, *ASTNode)\n    exit  func(*ASTNode, *ASTNode)\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7531\u6B64\u6211\u4EEC\u7684 map \u7C7B\u578B\u4E3A ",(0,a.jsx)(n.code,{children:"map[ASTNodeType]Methods"}),"\uFF0C\u53EF\u4EE5\u5B9E\u73B0 traverser \u5982\u4E0B\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func Traverser(ast *ASTNode, visitor map[ASTNodeType]Methods) {\n    var traverseNode func(*ASTNode, *ASTNode)\n    var traverseArray func([]*ASTNode, *ASTNode)\n\n    // helper that iterate over an array\n    traverseArray = func(array []*ASTNode, parent *ASTNode) {\n        for i := 0; i < len(array); i++ {\n            traverseNode(array[i], parent)\n        }\n    }\n\n    traverseNode = func(node *ASTNode, parent *ASTNode) {\n        methods := visitor[node.nodeType]\n        // call enter\n        if methods.enter != nil {\n            methods.enter(node, parent)\n        }\n\n        // traverse by current node type\n        switch node.nodeType {\n        case ASTNodeTypeProgram, ASTNodeTypeCallExpression:\n            traverseArray(node.params, node)\n        case ASTNodeTypeNumberLiteral, ASTNodeTypeStringLiteral, ASTNodeTypeExpressionStatement:\n            break\n        }\n        \n        // call exit\n        if methods.exit != nil {\n            methods.exit(node, parent)\n        }\n    }\n\n    traverseNode(ast, nil)\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"transformer",children:"Transformer"}),"\n",(0,a.jsxs)(n.p,{children:["Transformer \u9700\u8981\u8C03\u7528 ",(0,a.jsx)(n.code,{children:"Traverser()"})," \u51FD\u6570\u5C06 AST \u751F\u6210\u65B0\u7684 AST\uFF0C\u8F6C\u5316\u7684\u4F8B\u5B50\u5728 ",(0,a.jsx)(n.a,{href:"https://github.com/jamiebuilds/the-super-tiny-compiler/blob/d8d40130459d1537f6117a927947cd46c83182b0/the-super-tiny-compiler.js#L821",children:"\u8FD9\u91CC"})," \u53EF\u4EE5\u770B\u5230\u3002\u5BF9\u4E8E\u65B0\u7684 AST\uFF0C\u6211\u4EEC\u9700\u8981\u6DFB\u52A0\u4E00\u4E9B\u5C5E\u6027\u6765\u6269\u5145 ",(0,a.jsx)(n.code,{children:"ASTNode"})," \u7684\u5B9A\u4E49\u3002\u6BD4\u8F83\u91CD\u8981\u7684\u662F ",(0,a.jsx)(n.code,{children:"context *[]*ASTNode"}),"\uFF0C\u6211\u4EEC\u7528\u5B83\u6765\u8868\u793A\u4E00\u4E2A",(0,a.jsx)(n.strong,{children:"\u4ECE"}),"\u65E7 AST \u5230\u65B0 AST ",(0,a.jsx)(n.code,{children:"params"})," \u7684\u5F15\u7528\uFF0C\u56E0\u6B64\u5B83\u7684\u7C7B\u578B\u9700\u8981\u4E3A\u6307\u9488\u6570\u7EC4\u7684\u6307\u9488\uFF0C\u8FD9\u6837\u5F53\u6211\u4EEC\u4FEE\u6539\u65E7 AST \u8282\u70B9\u7684 ",(0,a.jsx)(n.code,{children:"context"})," \u65F6\uFF0C\u5BF9\u5E94\u7684\u53D8\u66F4\u4E5F\u4F1A\u53CD\u6620\u5728\u65B0 AST \u7684 ",(0,a.jsx)(n.code,{children:"params"})," \u4E0A\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"type Callee struct {\n    calleeType string\n    name       string\n}\n\ntype ASTNode struct {\n    nodeType   ASTNodeType\n    value      string\n    callee     Callee\n    expression *ASTNode\n    params     []*ASTNode\n\n    // reference from old ast to new ast\n    context    *[]*ASTNode\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Transformer \u51FD\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func Transformer(ast *ASTNode) ASTNode {\n    newAst := ASTNode{\n        nodeType: ASTNodeTypeProgram,\n        params:   []*ASTNode{},\n    }\n\n    // so we can push nodes to parent's context\n    ast.context = &newAst.params\n\n    Traverser(ast, map[ASTNodeType]Methods{\n        // ...\n    })\n\n    return newAst\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u9488\u5BF9\u4E0D\u540C\u7C7B\u578B\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"enter"})," \u65B9\u6CD5\u3002\u5BF9\u4E8E literal \u8282\u70B9\uFF0C\u6211\u4EEC\u7B80\u5355\u5730\u521B\u5EFA\u65B0 ",(0,a.jsx)(n.code,{children:"ASTNode"})," \u5E76\u6DFB\u52A0\u5230\u7236\u8282\u70B9\u7684 ",(0,a.jsx)(n.code,{children:"context"})," \u5373\u53EF\u3002\u7531\u4E8E ",(0,a.jsx)(n.code,{children:"context"})," \u662F\u6307\u5411\u65B0 AST ",(0,a.jsx)(n.code,{children:"params"})," \u7684\u5F15\u7528\uFF0C\u65B0 ",(0,a.jsx)(n.code,{children:"ASTNode"})," \u4E5F\u4F1A\u88AB\u6DFB\u52A0\u5230\u65B0 AST \u5BF9\u5E94\u7684 ",(0,a.jsx)(n.code,{children:"params"})," \u4E2D\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"map[ASTNodeType]Methods{\n    ASTNodeTypeNumberLiteral: Methods{\n        enter: func(node *ASTNode, parent *ASTNode) {\n            tmp := ASTNode{\n                nodeType: ASTNodeTypeNumberLiteral,\n                value:    node.value,\n            }\n            *parent.context = append(*parent.context, &tmp)\n        },\n    },\n    ASTNodeTypeStringLiteral: Methods{\n        enter: func(node *ASTNode, parent *ASTNode) {\n            tmp := ASTNode{\n                nodeType: ASTNodeTypeStringLiteral,\n                value:    node.value,\n            }\n            *parent.context = append(*parent.context, &tmp)\n        },\n    },\n    // ...\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6CE8\u610F\u8FD9\u91CC\u5C06\u8282\u70B9\u6DFB\u52A0\u5230 ",(0,a.jsx)(n.code,{children:"context"})," \u7684\u64CD\u4F5C\uFF0C\u7531\u4E8E ",(0,a.jsx)(n.code,{children:"context"})," \u662F\u6570\u7EC4\u6307\u9488\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u5B83\u6307\u5411\u7684\u5185\u5BB9\u8FDB\u884C\u64CD\u4F5C\uFF0C\u56E0\u6B64\u6709\u989D\u5916\u7684\u53D6\u503C\u7B26\u3002\u800C\u6570\u7EC4\u5143\u7D20\u662F\u6307\u5411\u8282\u70B9\u7684\u6307\u9488\uFF0C\u56E0\u6B64\u9700\u8981\u5BF9\u751F\u6210\u7684\u8282\u70B9\u53D6\u5730\u5740\u3002\u8BB8\u4E45\u4EE5\u6765 Swift \u5199\u5F97\u4E00\u628A\u68AD\u5DF2\u7ECF\u5DEE\u4E0D\u591A\u5FD8\u8BB0\u8FD9\u4E2A\u7EA7\u522B\u7684\u64CD\u4F5C\u4E86\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6700\u540E\u5BF9 CallExpression \u7C7B\u578B\uFF0C\u7531\u4E8E\u8868\u8FBE\u5F0F\u5177\u6709\u53C2\u6570\uFF0C\u6211\u4EEC\u9700\u8981\u628A\u65E7\u8282\u70B9\u7684 ",(0,a.jsx)(n.code,{children:"context"})," \u6307\u5411\u65B0\u8282\u70B9\u7684 ",(0,a.jsx)(n.code,{children:"params"}),"\uFF0C\u5C31\u5982\u540C\u6211\u4EEC\u5BF9\u6839\u7ED3\u70B9\u505A\u7684\u4E00\u6837\u3002\u53E6\u5916\u5728\u8FD9\u4E2A\u73A9\u5177\u89E3\u91CA\u5668\u4E2D\uFF0C\u5982\u679C\u7236\u8282\u70B9\u4E0D\u662F CallExpression \u7C7B\u578B\uFF0C\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u4E00\u4E2A ExpressionStatement \u53BB\u5D4C\u5957\u4E00\u4E0B\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'ASTNodeTypeCallExpression: Methods{\n    enter: func(node *ASTNode, parent *ASTNode) {\n        expression := ASTNode{\n            nodeType: ASTNodeTypeCallExpression,\n            callee:   Callee{"Identifier", node.value},\n            params:   []*ASTNode{},\n        }\n\n        // context of CallExpression refer to express\'s params so\n        // that we can push parameters\n        node.context = &expression.params\n\n        if parent.nodeType != ASTNodeTypeCallExpression {\n            // if not CallExpression, we need to wrap\n            newExpression := ASTNode{\n                nodeType:   ASTNodeTypeExpressionStatement,\n                expression: &expression,\n            }\n            *parent.context = append(*parent.context, &newExpression)\n            return\n        }\n\n        *parent.context = append(*parent.context, &expression)\n    },\n},\n'})}),"\n",(0,a.jsx)(n.h2,{id:"code-generation",children:"Code Generation"}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u540E\u5C31\u662F\u5C06\u65B0 AST \u89E3\u6790\u6210 C \u98CE\u683C\u4EE3\u7801\u4E86\u3002Code generator \u7684\u5B9E\u73B0\u975E\u5E38\u76F4\u63A5\uFF0C\u9488\u5BF9\u4E0D\u540C\u8282\u70B9\u7C7B\u578B\u751F\u6210\u4E0D\u540C\u4EE3\u7801\uFF0C\u5E76\u5BF9\u5B50\u8282\u70B9\u9012\u5F52\u8C03\u7528\u81EA\u8EAB\u5C31\u53EF\u4EE5\u4E86\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'func CodeGenerator(node ASTNode) string {\n    switch node.nodeType {\n    case ASTNodeTypeProgram:\n        res := []string{}\n        for _, param := range node.params {\n            res = append(res, CodeGenerator(*param))\n        }\n        return strings.Join(res, "\\n")\n\n    case ASTNodeTypeExpressionStatement:\n        return CodeGenerator(*node.expression) + ";"\n\n    case ASTNodeTypeCallExpression:\n        params := []string{}\n        for _, param := range node.params {\n            params = append(params, CodeGenerator(*param))\n        }\n        return node.callee.name + "(" + strings.Join(params, ", ") + ")"\n\n    case ASTNodeTypeNumberLiteral:\n        return node.value\n\n    case ASTNodeTypeStringLiteral:\n        return "\\"" + node.value + "\\""\n\n    default:\n        return ""\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"compiler",children:"Compiler"}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u540E\u628A\u6240\u6709\u8FC7\u7A0B\u8FDE\u8D77\u6765\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"func Compiler(input string) string {\n    tokens := Tokenizer(input)\n    ast := Parser(tokens)\n    newAst := Transformer(&ast)\n    output := CodeGenerator(newAst)\n    return output\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5199\u4E00\u5C0F\u6BB5\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u8F93\u5165\u4E3A ",(0,a.jsx)(n.code,{children:'(add 2 (subtract (add 3 5) 1))\\n(print \\"hello world\\")'}),"\uFF0C\u7F16\u8BD1\u8FD0\u884C\u4E00\u4E0B\u5F97\u5230\uFF1A"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'add(2, subtract(add(3, 5), 1));\nprint("hello world");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5B8C\u6574\u4EE3\u7801\u5728",(0,a.jsx)(n.a,{href:"https://github.com/xnth97/Data-Structure-Notes/blob/master/tiny-compiler-go/compiler.go",children:"\u8FD9\u91CC"}),"\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,a.jsx)(n.p,{children:"\u867D\u7136\u662F\u4E2A\u6CA1\u6709\u5375\u7528\u7684\u4E1C\u897F\uFF0C\u4E0D\u8FC7\u4ECE\u5934\u64B8\u7684\u8FC7\u7A0B\u4E5F\u80FD\u5B66\u4E60\u5230\u73B0\u4EE3\u7F16\u8BD1\u5668\u5927\u81F4\u7684\u5DE5\u4F5C\u539F\u7406\u3002\u539F\u9879\u76EE the-super-tiny-compiler \u5229\u7528\u4EE3\u7801\u6B65\u6B65\u89E3\u91CA\u7684\u5F62\u5F0F\u4E5F\u662F\u8BA9\u4EBA\u8033\u76EE\u4E00\u65B0\u3002\u53E6\u5916 Golang \u786E\u5B9E\u517C\u5177 Python \u6613\u5B66\u7684\u8BED\u6CD5\u3001\u5F3A\u5927\u7684\u6807\u51C6\u5E93\u548C C \u7684\u5E95\u5C42\u64CD\u4F5C\u80FD\u529B\uFF0C\u6BD4\u6211\u60F3\u8C61\u7684\u8981\u9999\uFF0C\u770B\u6765\u53EF\u4EE5\u5F53 gopher \u4E86\u3002"})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return s}});var t=r(67294);let a={},o=t.createContext(a);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}},6341:function(e){e.exports=JSON.parse('{"permalink":"/2020/05/29/tiny-compiler","source":"@site/blog/2020-05-29-tiny-compiler/index.md","title":"\u7528 Golang \u64B8\u4E00\u4E2A\u73A9\u5177\u7F16\u8BD1\u5668","description":"\u793E\u755C\u4EE5\u6765\u6BCF\u65E5\u642C\u7816\uFF0C\u5F88\u4E45\u6CA1\u6709\u50CF\u8BFB\u4E66\u65F6\u4E00\u6837\u5B66\u4E60\u4E00\u4E9B\u4E1C\u897F\u6C89\u6DC0\u4E0B\u4E86\u3002\u6700\u8FD1\u5728 GitHub \u4E0A\u770B\u5230 the-super-tiny-compiler \u8FD9\u4E2A\u9879\u76EE\uFF0C\u5F88\u559C\u6B22\u5B83\u6781\u7B80\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\uFF0C\u4E5F\u7ED9\u4E86\u5BF9\u7F16\u8BD1\u539F\u7406\u4E00\u77E5\u534A\u89E3\u7684\u6211\u4E00\u4E2A\u4ECE\u5934\u518D\u6765\u7684\u673A\u4F1A\u3002\u4E2A\u4EBA\u611F\u89C9\u539F\u9879\u76EE\u7528 JavaScript \u62B9\u53BB\u4E86\u4E00\u4E9B\u5B9E\u73B0\u7EC6\u8282\u7684\u540C\u65F6\u4E5F\u6A21\u7CCA\u4E86\u5177\u4F53\u7684\u7406\u89E3\uFF0C\u6545\u6B64\u7528 Golang \u5B66\u4E60\u4E0E\u5B9E\u73B0\u3002","date":"2020-05-29T13:40:06.000Z","tags":[{"inline":true,"label":"coding","permalink":"/tags/coding"},{"inline":true,"label":"note","permalink":"/tags/note"}],"readingTime":11.925,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u7528 Golang \u64B8\u4E00\u4E2A\u73A9\u5177\u7F16\u8BD1\u5668","date":"2020-05-29T13:40:06.000Z","tags":["coding","note"]},"unlisted":false,"prevItem":{"title":"\u6570\u5B57\u5BB6\u5EAD\u4E8C\u96F6\u4E8C\u96F6","permalink":"/2020/11/03/digital-home"},"nextItem":{"title":"2019 \u7684\u4E00\u4E9B\u788E\u7247","permalink":"/2020/01/16/annual"}}')}}]);