"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8202],{3382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=r(5893),a=r(1151);const o={title:"\u7528 Golang \u64b8\u4e00\u4e2a\u73a9\u5177\u7f16\u8bd1\u5668",date:new Date("2020-05-29T13:40:06.000Z"),tags:["coding","note"]},s=void 0,d={permalink:"/2020/05/29/tiny-compiler",source:"@site/blog/2020-05-29-tiny-compiler/index.md",title:"\u7528 Golang \u64b8\u4e00\u4e2a\u73a9\u5177\u7f16\u8bd1\u5668",description:"\u793e\u755c\u4ee5\u6765\u6bcf\u65e5\u642c\u7816\uff0c\u5f88\u4e45\u6ca1\u6709\u50cf\u8bfb\u4e66\u65f6\u4e00\u6837\u5b66\u4e60\u4e00\u4e9b\u4e1c\u897f\u6c89\u6dc0\u4e0b\u4e86\u3002\u6700\u8fd1\u5728 GitHub \u4e0a\u770b\u5230 the-super-tiny-compiler \u8fd9\u4e2a\u9879\u76ee\uff0c\u5f88\u559c\u6b22\u5b83\u6781\u7b80\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u4e5f\u7ed9\u4e86\u5bf9\u7f16\u8bd1\u539f\u7406\u4e00\u77e5\u534a\u89e3\u7684\u6211\u4e00\u4e2a\u4ece\u5934\u518d\u6765\u7684\u673a\u4f1a\u3002\u4e2a\u4eba\u611f\u89c9\u539f\u9879\u76ee\u7528 JavaScript \u62b9\u53bb\u4e86\u4e00\u4e9b\u5b9e\u73b0\u7ec6\u8282\u7684\u540c\u65f6\u4e5f\u6a21\u7cca\u4e86\u5177\u4f53\u7684\u7406\u89e3\uff0c\u6545\u6b64\u7528 Golang \u5b66\u4e60\u4e0e\u5b9e\u73b0\u3002",date:"2020-05-29T13:40:06.000Z",tags:[{label:"coding",permalink:"/tags/coding"},{label:"note",permalink:"/tags/note"}],readingTime:11.925,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u7528 Golang \u64b8\u4e00\u4e2a\u73a9\u5177\u7f16\u8bd1\u5668",date:"2020-05-29T13:40:06.000Z",tags:["coding","note"]},unlisted:!1,prevItem:{title:"\u6570\u5b57\u5bb6\u5ead\u4e8c\u96f6\u4e8c\u96f6",permalink:"/2020/11/03/digital-home"},nextItem:{title:"2019 \u7684\u4e00\u4e9b\u788e\u7247",permalink:"/2020/01/16/annual"}},i={authorsImageUrls:[]},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Parsing",id:"parsing",level:2},{value:"Lexical Analysis",id:"lexical-analysis",level:3},{value:"Syntactic Analysis",id:"syntactic-analysis",level:3},{value:"Transformation",id:"transformation",level:2},{value:"Traverser",id:"traverser",level:3},{value:"Transformer",id:"transformer",level:3},{value:"Code Generation",id:"code-generation",level:2},{value:"Compiler",id:"compiler",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u793e\u755c\u4ee5\u6765\u6bcf\u65e5\u642c\u7816\uff0c\u5f88\u4e45\u6ca1\u6709\u50cf\u8bfb\u4e66\u65f6\u4e00\u6837\u5b66\u4e60\u4e00\u4e9b\u4e1c\u897f\u6c89\u6dc0\u4e0b\u4e86\u3002\u6700\u8fd1\u5728 GitHub \u4e0a\u770b\u5230 ",(0,t.jsx)(n.a,{href:"https://github.com/jamiebuilds/the-super-tiny-compiler",children:"the-super-tiny-compiler"})," \u8fd9\u4e2a\u9879\u76ee\uff0c\u5f88\u559c\u6b22\u5b83\u6781\u7b80\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\uff0c\u4e5f\u7ed9\u4e86\u5bf9\u7f16\u8bd1\u539f\u7406\u4e00\u77e5\u534a\u89e3\u7684\u6211\u4e00\u4e2a\u4ece\u5934\u518d\u6765\u7684\u673a\u4f1a\u3002\u4e2a\u4eba\u611f\u89c9\u539f\u9879\u76ee\u7528 JavaScript \u62b9\u53bb\u4e86\u4e00\u4e9b\u5b9e\u73b0\u7ec6\u8282\u7684\u540c\u65f6\u4e5f\u6a21\u7cca\u4e86\u5177\u4f53\u7684\u7406\u89e3\uff0c\u6545\u6b64\u7528 Golang \u5b66\u4e60\u4e0e\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u4eec\u5b9e\u73b0\u7684\u73a9\u5177\u7f16\u8bd1\u5668\u662f\u5c06 lisp \u98ce\u683c\u7684\u4ee3\u7801\u8f6c\u5316\u4e3a C \u8bed\u6cd5\uff0c\u4f8b\u5982 ",(0,t.jsx)(n.code,{children:"(add 2 (subtract 4 2))"})," \u4f1a\u88ab\u8f6c\u5316\u6210 ",(0,t.jsx)(n.code,{children:"add(2, subtract(4, 2));"}),"\u3002\u5927\u90e8\u5206\u73b0\u4ee3\u7f16\u8bd1\u5668\u5de5\u4f5c\u4e3b\u8981\u6709\u4e09\u4e2a\u8fc7\u7a0b\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Parsing\uff1a\u5c06\u6e90\u4ee3\u7801\u89e3\u6790\u4e3a\u62bd\u8c61\u8868\u8fbe\uff08\u5982\u62bd\u8c61\u8bed\u6cd5\u6811 Abstract syntax tree\uff09"}),"\n",(0,t.jsx)(n.li,{children:"Transformation\uff1a\u64cd\u4f5c AST \u5e76\u505a\u4e00\u4e9b\u7f16\u8bd1\u5668\u9700\u8981\u7684\u5de5\u4f5c"}),"\n",(0,t.jsx)(n.li,{children:"Code Generation\uff1a\u5c06\u53d8\u5f62\u540e\u7684\u4ee3\u7801\u751f\u6210\u65b0\u7684\u4ee3\u7801"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6309\u7167\u6211 iOS \u7684\u7ecf\u9a8c\uff0c\u8fd9\u5927\u6982\u5bf9\u5e94\u7684\u662f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Clang \u5bf9 C/C++/Objective-C/Swift \u4ee3\u7801\u8fdb\u884c\u8bcd\u6cd5\u5206\u6790\u3001\u9759\u6001\u5206\u6790\u7b49\uff0c\u751f\u6210 AST ",(0,t.jsx)(n.code,{children:"clang -Xclang -ast-dump"})]}),"\n",(0,t.jsxs)(n.li,{children:["Clang \u5c06 AST \u751f\u6210 LLVM \u4e2d\u95f4\u4ee3\u7801\u5e76\u8fdb\u884c\u7f16\u8bd1\u4f18\u5316\uff0c\u4f8b\u5982\u5168\u5c40\u53d8\u91cf\u3001\u5faa\u73af\u3001\u5c3e\u9012\u5f52\u7b49\u60c5\u51b5 ",(0,t.jsx)(n.code,{children:"clang -emit-llvm"})]}),"\n",(0,t.jsxs)(n.li,{children:["Clang \u5c06\u4f18\u5316\u540e\u7684 LLVM \u4ee3\u7801\u751f\u6210\u6c47\u7f16\u4ee3\u7801 ",(0,t.jsx)(n.code,{children:"clang -S -o"}),"\uff0cassembler \u5c06\u6c47\u7f16\u4ee3\u7801\u751f\u6210\u673a\u5668\u7801\uff0clinker \u5c06\u673a\u5668\u7801\u548c\u9759\u6001\u5e93\u94fe\u63a5\u751f\u6210 Mach-O \u53ef\u6267\u884c\u6587\u4ef6"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parsing",children:"Parsing"}),"\n",(0,t.jsx)(n.p,{children:"\u89e3\u6790\u4e3b\u8981\u662f\u8bcd\u6cd5\u5206\u6790\uff08lexical analysis\uff09\u548c\u53e5\u6cd5\u5206\u6790\uff08syntactic analysis\uff09\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"lexical-analysis",children:"Lexical Analysis"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bcd\u6cd5\u5206\u6790\u4e2d tokenizer \u5c06\u539f\u59cb\u4ee3\u7801\u62c6\u5206\u6210 token\uff08\u6216 lexer\uff09\u3002\u6bd4\u5982 ",(0,t.jsx)(n.code,{children:"(add 2 4)"})," \u4f1a\u88ab\u89e3\u6790\u4e3a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"[\n    {\n        type: 'paren', value: '(',\n    }, {\n        type: 'name', value: 'add',\n    }, {\n        type: 'number', value: '2',\n    }, {\n        type: 'number', value: '4',\n    }, {\n        type: 'paren', value: ')',\n    }\n]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49 token \u5305\u62ec\u4e24\u4e2a\u5c5e\u6027\uff1atype \u548c value\u3002\u9996\u5148\u58f0\u660e\u6211\u4eec\u9700\u8981\u7684 token type \u548c\u7ed3\u6784\u4f53\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type TokenType string\n\nconst (\n    TokenTypeParen  TokenType = "paren"\n    TokenTypeName   TokenType = "name"\n    TokenTypeNumber TokenType = "number"\n    TokenTypeString TokenType = "string"\n)\n\ntype Token struct {\n    tokenType TokenType\n    value     string\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Tokenizer \u51fd\u6570\u63a5\u53d7 input \u5b57\u7b26\u4e32\uff0c\u904d\u5386\u5e76\u6839\u636e\u5f53\u524d\u5b57\u7b26\u751f\u6210 token\uff0c\u6700\u540e\u8fd4\u56de token \u6570\u7ec4\u3002\u8fd9\u91cc\u6211\u4eec\u5229\u7528\u4e86 Golang \u7684 ",(0,t.jsx)(n.code,{children:"unicode"})," \u5305\u5b9e\u73b0\u5feb\u901f\u7684\u5224\u65ad\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func Tokenizer(input string) []Token {\n    // counter\n    current := 0\n    // token array to be returned\n    tokens := make([]Token, 0)\n    // iterate\n    for current < len(input) {\n        char := input[current]\n        charStr := string(char)\n        if charStr == "(" || charStr == ")" {\n            tokens = append(tokens, Token{TokenTypeParen, charStr})\n            current++\n            continue\n        }\n\n        charRune := rune(char)\n        if unicode.IsSpace(charRune) {\n            current++\n            continue\n        }\n\n        if unicode.IsDigit(charRune) {\n            value := ""\n            for unicode.IsDigit(rune(char)) {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n            tokens = append(tokens, Token{TokenTypeNumber, value})\n            continue\n        }\n\n        if charStr == "\\"" {\n            value := ""\n            // skip opening parenthesis\n            current++\n            char = input[current]\n\n            // for characters that are not "\\"", append to value of current token\n            for string(char) != "\\"" {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n\n            // skip closing parenthesis\n            current++\n            char = input[current]\n\n            tokens = append(tokens, Token{TokenTypeString, value})\n            continue\n        }\n\n        if unicode.IsLetter(charRune) {\n            value := ""\n            for unicode.IsLetter(rune(char)) {\n                value = value + string(char)\n                current++\n                char = input[current]\n            }\n            tokens = append(tokens, Token{TokenTypeName, value})\n            continue\n        }\n    }\n    return tokens\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"syntactic-analysis",children:"Syntactic Analysis"}),"\n",(0,t.jsxs)(n.p,{children:["\u53e5\u6cd5\u5206\u6790\u5c06 token \u6570\u7ec4\u89e3\u6790\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\u3002\u987e\u540d\u601d\u4e49\uff0cAST \u662f\u6811\u72b6\u7ed3\u6784\uff0c\u4f8b\u5982\u4e0a\u6587\u7684 ",(0,t.jsx)(n.code,{children:"(add 2 4)"})," \u89e3\u6790\u800c\u6765\u7684 token \u6570\u7ec4\u4f1a\u88ab\u8fdb\u4e00\u6b65\u89e3\u6790\u4e3a AST \u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n    type: 'Program',\n    params: [{\n        type: 'CallExpression',\n        value: 'add',\n        params: [{\n            type: 'NumberLiteral',\n            value: '2',\n        }, {\n            type: 'NumberLiteral',\n            value: '4',\n        }],\n    }],\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["AST \u7684\u6bcf\u4e2a\u8282\u70b9\u53ef\u5b9a\u4e49\u5982\u4e0b\uff0c\u6ce8\u610f ",(0,t.jsx)(n.code,{children:"params"})," \u6211\u4eec\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u6307\u9488\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u6307\u5411 ",(0,t.jsx)(n.code,{children:"ASTNode"})," \u7684\u6307\u9488\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type ASTNodeType string\n\nconst (\n    ASTNodeTypeProgram             ASTNodeType = "Program"\n    ASTNodeTypeNumberLiteral       ASTNodeType = "NumberLiteral"\n    ASTNodeTypeStringLiteral       ASTNodeType = "StringLiteral"\n    ASTNodeTypeCallExpression      ASTNodeType = "CallExpression"\n    ASTNodeTypeExpressionStatement ASTNodeType = "ExpressionStatement"\n)\n\ntype ASTNode struct {\n    nodeType   ASTNodeType\n    value      string\n    params     []*ASTNode\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Parser \u51fd\u6570\u63a5\u53d7 token \u6570\u7ec4\u5e76\u8fd4\u56de AST \u6839\u7ed3\u70b9\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Parser(tokens []Token) ASTNode {\n    current := 0\n\n    // recursively walk through nodes\n    var walk func() ASTNode\n    // ...\n\n    // create root node\n    ast := ASTNode{\n        nodeType: ASTNodeTypeProgram,\n    }\n    // push nodes to ast.params\n    for current < len(tokens) {\n        tmp := walk()\n        ast.params = append(ast.params, &tmp)\n    }\n    return ast\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e2d\u95f4\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a\u95ed\u5305 ",(0,t.jsx)(n.code,{children:"walk()"})," \u6765\u6839\u636e ",(0,t.jsx)(n.code,{children:"current"})," \u628a Token \u89e3\u6790\u4e3a ASTNode\u3002\u9884\u5148\u58f0\u660e\u95ed\u5305\u7684\u539f\u56e0\u662f Golang \u4e0d\u5141\u8bb8\u901a\u8fc7\u6d77\u8c61\u8fd0\u7b97\u7b26\uff08:=\uff09\u58f0\u660e\u7684\u95ed\u5305\u8c03\u7528\u81ea\u5df1\u3002",(0,t.jsx)(n.code,{children:"walk"})," \u95ed\u5305\u5b9e\u73b0\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'walk = func() ASTNode {\n    token := tokens[current]\n\n    if token.tokenType == TokenTypeNumber {\n        current++\n        return ASTNode{\n            nodeType: ASTNodeTypeNumberLiteral,\n            value:    token.value,\n        }\n    }\n\n    if token.tokenType == TokenTypeString {\n        current++\n        return ASTNode{\n            nodeType: ASTNodeTypeStringLiteral,\n            value:    token.value,\n        }\n    }\n\n    if token.tokenType == TokenTypeParen && token.value == "(" {\n        // skip opening parenthesis\n        current++\n        token = tokens[current]\n\n        node := ASTNode{\n            nodeType: ASTNodeTypeCallExpression,\n            value:    token.value,\n            params:   []*ASTNode{},\n        }\n        // skip name token\n        current++\n        token = tokens[current]\n\n        for token.tokenType != TokenTypeParen || (token.tokenType == TokenTypeParen && token.value != ")") {\n            tmp := walk()\n            node.params = append(node.params, &tmp)\n            token = tokens[current]\n        }\n\n        // skip closing parenthesis\n        current++\n        return node\n    }\n\n    // Should not get here\n    return ASTNode{}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"transformation",children:"Transformation"}),"\n",(0,t.jsx)(n.p,{children:"\u771f\u5b9e\u7684\u7f16\u8bd1\u5668\u53ef\u80fd\u4f1a\u8fdb\u884c\u5f88\u591a\u4f18\u5316\u5e76\u751f\u6210\u4e2d\u95f4\u4ee3\u7801\uff0c\u4f46\u5728\u73a9\u5177\u7f16\u8bd1\u5668\u91cc\u6211\u4eec\u53ea\u662f\u64cd\u4f5c AST\uff0c\u8fdb\u884c\u4e00\u4e9b\u6539\u52a8\u5e76\u751f\u6210\u65b0\u7684 AST\u3002\u4e00\u822c\u6765\u8bf4\u4e5f\u53ef\u4ee5\u76f4\u63a5\u66f4\u6539\u539f\u59cb AST\uff0c\u4f46\u9274\u4e8e\u6211\u4eec\u662f target \u53e6\u4e00\u79cd\u8bed\u8a00\uff08lisp -> C\uff09\u6211\u4eec\u8fd8\u662f\u521b\u5efa\u4e00\u68f5\u65b0\u7684 AST\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"traverser",children:"Traverser"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u64cd\u4f5c AST\uff0c\u6211\u4eec\u9700\u8981 traverser \u53bb\u6df1\u5ea6\u4f18\u5148\u904d\u5386 AST\uff0c\u5e76\u5bf9\u6bcf\u4e2a\u7c7b\u578b\u7684\u8282\u70b9\u6267\u884c\u4e0d\u540c\u7684\u64cd\u4f5c\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e00\u4e2a map\uff0ckey \u662f\u8282\u70b9\u7684\u7c7b\u578b\uff0cvalue \u662f\u6211\u4eec\u9700\u8981\u6267\u884c\u7684\u64cd\u4f5c\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u8282\u70b9\uff0c\u6211\u4eec\u9700\u8981\u5728\u5f00\u59cb\u904d\u5386\u8282\u70b9\u65f6\uff08enter\uff09\u4ee5\u53ca\u7ed3\u675f\u904d\u5386\u5176\u5b50\u6811\u65f6\uff08exit\uff09\u6267\u884c\uff0c\u56e0\u6b64\u6211\u4eec\u58f0\u660e\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Methods"})," \u7ed3\u6784\u4f53\uff0c\u5177\u6709 ",(0,t.jsx)(n.code,{children:"enter"})," \u548c ",(0,t.jsx)(n.code,{children:"exit"})," \u4e24\u4e2a\u95ed\u5305\u5c5e\u6027\uff0c\u6bcf\u4e2a\u95ed\u5305\u63a5\u53d7 ",(0,t.jsx)(n.code,{children:"node"})," \u548c ",(0,t.jsx)(n.code,{children:"parent"})," \u4e24\u4e2a\u53c2\u6570\u8868\u793a\u5f53\u524d\u8282\u70b9\u548c\u7236\u8282\u70b9\u3002\u7531\u4e8e\u95ed\u5305\u9700\u8981\u5bf9\u8282\u70b9\u8fdb\u884c\u6539\u52a8\uff0c\u7c7b\u578b\u4e3a\u6307\u5411\u8282\u70b9\u7684\u6307\u9488\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Methods struct {\n    enter func(*ASTNode, *ASTNode)\n    exit  func(*ASTNode, *ASTNode)\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u6b64\u6211\u4eec\u7684 map \u7c7b\u578b\u4e3a ",(0,t.jsx)(n.code,{children:"map[ASTNodeType]Methods"}),"\uff0c\u53ef\u4ee5\u5b9e\u73b0 traverser \u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Traverser(ast *ASTNode, visitor map[ASTNodeType]Methods) {\n    var traverseNode func(*ASTNode, *ASTNode)\n    var traverseArray func([]*ASTNode, *ASTNode)\n\n    // helper that iterate over an array\n    traverseArray = func(array []*ASTNode, parent *ASTNode) {\n        for i := 0; i < len(array); i++ {\n            traverseNode(array[i], parent)\n        }\n    }\n\n    traverseNode = func(node *ASTNode, parent *ASTNode) {\n        methods := visitor[node.nodeType]\n        // call enter\n        if methods.enter != nil {\n            methods.enter(node, parent)\n        }\n\n        // traverse by current node type\n        switch node.nodeType {\n        case ASTNodeTypeProgram, ASTNodeTypeCallExpression:\n            traverseArray(node.params, node)\n        case ASTNodeTypeNumberLiteral, ASTNodeTypeStringLiteral, ASTNodeTypeExpressionStatement:\n            break\n        }\n        \n        // call exit\n        if methods.exit != nil {\n            methods.exit(node, parent)\n        }\n    }\n\n    traverseNode(ast, nil)\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"transformer",children:"Transformer"}),"\n",(0,t.jsxs)(n.p,{children:["Transformer \u9700\u8981\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"Traverser()"})," \u51fd\u6570\u5c06 AST \u751f\u6210\u65b0\u7684 AST\uff0c\u8f6c\u5316\u7684\u4f8b\u5b50\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/jamiebuilds/the-super-tiny-compiler/blob/d8d40130459d1537f6117a927947cd46c83182b0/the-super-tiny-compiler.js#L821",children:"\u8fd9\u91cc"})," \u53ef\u4ee5\u770b\u5230\u3002\u5bf9\u4e8e\u65b0\u7684 AST\uff0c\u6211\u4eec\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u5c5e\u6027\u6765\u6269\u5145 ",(0,t.jsx)(n.code,{children:"ASTNode"})," \u7684\u5b9a\u4e49\u3002\u6bd4\u8f83\u91cd\u8981\u7684\u662f ",(0,t.jsx)(n.code,{children:"context *[]*ASTNode"}),"\uff0c\u6211\u4eec\u7528\u5b83\u6765\u8868\u793a\u4e00\u4e2a",(0,t.jsx)(n.strong,{children:"\u4ece"}),"\u65e7 AST \u5230\u65b0 AST ",(0,t.jsx)(n.code,{children:"params"})," \u7684\u5f15\u7528\uff0c\u56e0\u6b64\u5b83\u7684\u7c7b\u578b\u9700\u8981\u4e3a\u6307\u9488\u6570\u7ec4\u7684\u6307\u9488\uff0c\u8fd9\u6837\u5f53\u6211\u4eec\u4fee\u6539\u65e7 AST \u8282\u70b9\u7684 ",(0,t.jsx)(n.code,{children:"context"})," \u65f6\uff0c\u5bf9\u5e94\u7684\u53d8\u66f4\u4e5f\u4f1a\u53cd\u6620\u5728\u65b0 AST \u7684 ",(0,t.jsx)(n.code,{children:"params"})," \u4e0a\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type Callee struct {\n    calleeType string\n    name       string\n}\n\ntype ASTNode struct {\n    nodeType   ASTNodeType\n    value      string\n    callee     Callee\n    expression *ASTNode\n    params     []*ASTNode\n\n    // reference from old ast to new ast\n    context    *[]*ASTNode\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Transformer \u51fd\u6570\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Transformer(ast *ASTNode) ASTNode {\n    newAst := ASTNode{\n        nodeType: ASTNodeTypeProgram,\n        params:   []*ASTNode{},\n    }\n\n    // so we can push nodes to parent's context\n    ast.context = &newAst.params\n\n    Traverser(ast, map[ASTNodeType]Methods{\n        // ...\n    })\n\n    return newAst\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:"enter"})," \u65b9\u6cd5\u3002\u5bf9\u4e8e literal \u8282\u70b9\uff0c\u6211\u4eec\u7b80\u5355\u5730\u521b\u5efa\u65b0 ",(0,t.jsx)(n.code,{children:"ASTNode"})," \u5e76\u6dfb\u52a0\u5230\u7236\u8282\u70b9\u7684 ",(0,t.jsx)(n.code,{children:"context"})," \u5373\u53ef\u3002\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"context"})," \u662f\u6307\u5411\u65b0 AST ",(0,t.jsx)(n.code,{children:"params"})," \u7684\u5f15\u7528\uff0c\u65b0 ",(0,t.jsx)(n.code,{children:"ASTNode"})," \u4e5f\u4f1a\u88ab\u6dfb\u52a0\u5230\u65b0 AST \u5bf9\u5e94\u7684 ",(0,t.jsx)(n.code,{children:"params"})," \u4e2d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"map[ASTNodeType]Methods{\n    ASTNodeTypeNumberLiteral: Methods{\n        enter: func(node *ASTNode, parent *ASTNode) {\n            tmp := ASTNode{\n                nodeType: ASTNodeTypeNumberLiteral,\n                value:    node.value,\n            }\n            *parent.context = append(*parent.context, &tmp)\n        },\n    },\n    ASTNodeTypeStringLiteral: Methods{\n        enter: func(node *ASTNode, parent *ASTNode) {\n            tmp := ASTNode{\n                nodeType: ASTNodeTypeStringLiteral,\n                value:    node.value,\n            }\n            *parent.context = append(*parent.context, &tmp)\n        },\n    },\n    // ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\u8fd9\u91cc\u5c06\u8282\u70b9\u6dfb\u52a0\u5230 ",(0,t.jsx)(n.code,{children:"context"})," \u7684\u64cd\u4f5c\uff0c\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"context"})," \u662f\u6570\u7ec4\u6307\u9488\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u5b83\u6307\u5411\u7684\u5185\u5bb9\u8fdb\u884c\u64cd\u4f5c\uff0c\u56e0\u6b64\u6709\u989d\u5916\u7684\u53d6\u503c\u7b26\u3002\u800c\u6570\u7ec4\u5143\u7d20\u662f\u6307\u5411\u8282\u70b9\u7684\u6307\u9488\uff0c\u56e0\u6b64\u9700\u8981\u5bf9\u751f\u6210\u7684\u8282\u70b9\u53d6\u5730\u5740\u3002\u8bb8\u4e45\u4ee5\u6765 Swift \u5199\u5f97\u4e00\u628a\u68ad\u5df2\u7ecf\u5dee\u4e0d\u591a\u5fd8\u8bb0\u8fd9\u4e2a\u7ea7\u522b\u7684\u64cd\u4f5c\u4e86\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u540e\u5bf9 CallExpression \u7c7b\u578b\uff0c\u7531\u4e8e\u8868\u8fbe\u5f0f\u5177\u6709\u53c2\u6570\uff0c\u6211\u4eec\u9700\u8981\u628a\u65e7\u8282\u70b9\u7684 ",(0,t.jsx)(n.code,{children:"context"})," \u6307\u5411\u65b0\u8282\u70b9\u7684 ",(0,t.jsx)(n.code,{children:"params"}),"\uff0c\u5c31\u5982\u540c\u6211\u4eec\u5bf9\u6839\u7ed3\u70b9\u505a\u7684\u4e00\u6837\u3002\u53e6\u5916\u5728\u8fd9\u4e2a\u73a9\u5177\u89e3\u91ca\u5668\u4e2d\uff0c\u5982\u679c\u7236\u8282\u70b9\u4e0d\u662f CallExpression \u7c7b\u578b\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a ExpressionStatement \u53bb\u5d4c\u5957\u4e00\u4e0b\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'ASTNodeTypeCallExpression: Methods{\n    enter: func(node *ASTNode, parent *ASTNode) {\n        expression := ASTNode{\n            nodeType: ASTNodeTypeCallExpression,\n            callee:   Callee{"Identifier", node.value},\n            params:   []*ASTNode{},\n        }\n\n        // context of CallExpression refer to express\'s params so\n        // that we can push parameters\n        node.context = &expression.params\n\n        if parent.nodeType != ASTNodeTypeCallExpression {\n            // if not CallExpression, we need to wrap\n            newExpression := ASTNode{\n                nodeType:   ASTNodeTypeExpressionStatement,\n                expression: &expression,\n            }\n            *parent.context = append(*parent.context, &newExpression)\n            return\n        }\n\n        *parent.context = append(*parent.context, &expression)\n    },\n},\n'})}),"\n",(0,t.jsx)(n.h2,{id:"code-generation",children:"Code Generation"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u5c31\u662f\u5c06\u65b0 AST \u89e3\u6790\u6210 C \u98ce\u683c\u4ee3\u7801\u4e86\u3002Code generator \u7684\u5b9e\u73b0\u975e\u5e38\u76f4\u63a5\uff0c\u9488\u5bf9\u4e0d\u540c\u8282\u70b9\u7c7b\u578b\u751f\u6210\u4e0d\u540c\u4ee3\u7801\uff0c\u5e76\u5bf9\u5b50\u8282\u70b9\u9012\u5f52\u8c03\u7528\u81ea\u8eab\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'func CodeGenerator(node ASTNode) string {\n    switch node.nodeType {\n    case ASTNodeTypeProgram:\n        res := []string{}\n        for _, param := range node.params {\n            res = append(res, CodeGenerator(*param))\n        }\n        return strings.Join(res, "\\n")\n\n    case ASTNodeTypeExpressionStatement:\n        return CodeGenerator(*node.expression) + ";"\n\n    case ASTNodeTypeCallExpression:\n        params := []string{}\n        for _, param := range node.params {\n            params = append(params, CodeGenerator(*param))\n        }\n        return node.callee.name + "(" + strings.Join(params, ", ") + ")"\n\n    case ASTNodeTypeNumberLiteral:\n        return node.value\n\n    case ASTNodeTypeStringLiteral:\n        return "\\"" + node.value + "\\""\n\n    default:\n        return ""\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"compiler",children:"Compiler"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u540e\u628a\u6240\u6709\u8fc7\u7a0b\u8fde\u8d77\u6765\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func Compiler(input string) string {\n    tokens := Tokenizer(input)\n    ast := Parser(tokens)\n    newAst := Transformer(&ast)\n    output := CodeGenerator(newAst)\n    return output\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5199\u4e00\u5c0f\u6bb5\u6d4b\u8bd5\u4ee3\u7801\uff0c\u8f93\u5165\u4e3a ",(0,t.jsx)(n.code,{children:'(add 2 (subtract (add 3 5) 1))\\n(print \\"hello world\\")'}),"\uff0c\u7f16\u8bd1\u8fd0\u884c\u4e00\u4e0b\u5f97\u5230\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'add(2, subtract(add(3, 5), 1));\nprint("hello world");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5b8c\u6574\u4ee3\u7801\u5728",(0,t.jsx)(n.a,{href:"https://github.com/xnth97/Data-Structure-Notes/blob/master/tiny-compiler-go/compiler.go",children:"\u8fd9\u91cc"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u662f\u4e2a\u6ca1\u6709\u5375\u7528\u7684\u4e1c\u897f\uff0c\u4e0d\u8fc7\u4ece\u5934\u64b8\u7684\u8fc7\u7a0b\u4e5f\u80fd\u5b66\u4e60\u5230\u73b0\u4ee3\u7f16\u8bd1\u5668\u5927\u81f4\u7684\u5de5\u4f5c\u539f\u7406\u3002\u539f\u9879\u76ee the-super-tiny-compiler \u5229\u7528\u4ee3\u7801\u6b65\u6b65\u89e3\u91ca\u7684\u5f62\u5f0f\u4e5f\u662f\u8ba9\u4eba\u8033\u76ee\u4e00\u65b0\u3002\u53e6\u5916 Golang \u786e\u5b9e\u517c\u5177 Python \u6613\u5b66\u7684\u8bed\u6cd5\u3001\u5f3a\u5927\u7684\u6807\u51c6\u5e93\u548c C \u7684\u5e95\u5c42\u64cd\u4f5c\u80fd\u529b\uff0c\u6bd4\u6211\u60f3\u8c61\u7684\u8981\u9999\uff0c\u770b\u6765\u53ef\u4ee5\u5f53 gopher \u4e86\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var t=r(7294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);