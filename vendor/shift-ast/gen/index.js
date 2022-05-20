// Generated by scripts/generate.js.

/**
 * Copyright 2016 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.ArrayAssignmentTarget = class {
  constructor({ elements, rest }) {
    this.type = 'ArrayAssignmentTarget';
    this.elements = elements;
    this.rest = rest;
  }
};

exports.ArrayBinding = class {
  constructor({ elements, rest }) {
    this.type = 'ArrayBinding';
    this.elements = elements;
    this.rest = rest;
  }
};

exports.ArrayExpression = class {
  constructor({ elements }) {
    this.type = 'ArrayExpression';
    this.elements = elements;
  }
};

exports.ArrowExpression = class {
  constructor({ isAsync, params, body }) {
    this.type = 'ArrowExpression';
    this.isAsync = isAsync;
    this.params = params;
    this.body = body;
  }
};

exports.AssignmentExpression = class {
  constructor({ binding, expression }) {
    this.type = 'AssignmentExpression';
    this.binding = binding;
    this.expression = expression;
  }
};

exports.AssignmentTargetIdentifier = class {
  constructor({ name }) {
    this.type = 'AssignmentTargetIdentifier';
    this.name = name;
  }
};

exports.AssignmentTargetPropertyIdentifier = class {
  constructor({ binding, init }) {
    this.type = 'AssignmentTargetPropertyIdentifier';
    this.binding = binding;
    this.init = init;
  }
};

exports.AssignmentTargetPropertyProperty = class {
  constructor({ name, binding }) {
    this.type = 'AssignmentTargetPropertyProperty';
    this.name = name;
    this.binding = binding;
  }
};

exports.AssignmentTargetWithDefault = class {
  constructor({ binding, init }) {
    this.type = 'AssignmentTargetWithDefault';
    this.binding = binding;
    this.init = init;
  }
};

exports.AwaitExpression = class {
  constructor({ expression }) {
    this.type = 'AwaitExpression';
    this.expression = expression;
  }
};

exports.BinaryExpression = class {
  constructor({ left, operator, right }) {
    this.type = 'BinaryExpression';
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
};

exports.BindingIdentifier = class {
  constructor({ name }) {
    this.type = 'BindingIdentifier';
    this.name = name;
  }
};

exports.BindingPropertyIdentifier = class {
  constructor({ binding, init }) {
    this.type = 'BindingPropertyIdentifier';
    this.binding = binding;
    this.init = init;
  }
};

exports.BindingPropertyProperty = class {
  constructor({ name, binding }) {
    this.type = 'BindingPropertyProperty';
    this.name = name;
    this.binding = binding;
  }
};

exports.BindingWithDefault = class {
  constructor({ binding, init }) {
    this.type = 'BindingWithDefault';
    this.binding = binding;
    this.init = init;
  }
};

exports.Block = class {
  constructor({ statements }) {
    this.type = 'Block';
    this.statements = statements;
  }
};

exports.BlockStatement = class {
  constructor({ block }) {
    this.type = 'BlockStatement';
    this.block = block;
  }
};

exports.BreakStatement = class {
  constructor({ label }) {
    this.type = 'BreakStatement';
    this.label = label;
  }
};

exports.CallExpression = class {
  constructor({ callee, arguments: _arguments }) {
    this.type = 'CallExpression';
    this.callee = callee;
    this.arguments = _arguments;
  }
};

exports.CatchClause = class {
  constructor({ binding, body }) {
    this.type = 'CatchClause';
    this.binding = binding;
    this.body = body;
  }
};

exports.ClassDeclaration = class {
  constructor({ name, super: _super, elements }) {
    this.type = 'ClassDeclaration';
    this.name = name;
    this.super = _super;
    this.elements = elements;
  }
};

exports.ClassElement = class {
  constructor({ isStatic, method }) {
    this.type = 'ClassElement';
    this.isStatic = isStatic;
    this.method = method;
  }
};

exports.ClassExpression = class {
  constructor({ name, super: _super, elements }) {
    this.type = 'ClassExpression';
    this.name = name;
    this.super = _super;
    this.elements = elements;
  }
};

exports.CompoundAssignmentExpression = class {
  constructor({ binding, operator, expression }) {
    this.type = 'CompoundAssignmentExpression';
    this.binding = binding;
    this.operator = operator;
    this.expression = expression;
  }
};

exports.ComputedMemberAssignmentTarget = class {
  constructor({ object, expression }) {
    this.type = 'ComputedMemberAssignmentTarget';
    this.object = object;
    this.expression = expression;
  }
};

exports.ComputedMemberExpression = class {
  constructor({ object, expression }) {
    this.type = 'ComputedMemberExpression';
    this.object = object;
    this.expression = expression;
  }
};

exports.ComputedPropertyName = class {
  constructor({ expression }) {
    this.type = 'ComputedPropertyName';
    this.expression = expression;
  }
};

exports.ConditionalExpression = class {
  constructor({ test, consequent, alternate }) {
    this.type = 'ConditionalExpression';
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
};

exports.ContinueStatement = class {
  constructor({ label }) {
    this.type = 'ContinueStatement';
    this.label = label;
  }
};

exports.DataProperty = class {
  constructor({ name, expression }) {
    this.type = 'DataProperty';
    this.name = name;
    this.expression = expression;
  }
};

exports.DebuggerStatement = class {
  constructor() {
    this.type = 'DebuggerStatement';
  }
};

exports.Directive = class {
  constructor({ rawValue }) {
    this.type = 'Directive';
    this.rawValue = rawValue;
  }
};

exports.DoWhileStatement = class {
  constructor({ body, test }) {
    this.type = 'DoWhileStatement';
    this.body = body;
    this.test = test;
  }
};

exports.EmptyStatement = class {
  constructor() {
    this.type = 'EmptyStatement';
  }
};

exports.Export = class {
  constructor({ declaration }) {
    this.type = 'Export';
    this.declaration = declaration;
  }
};

exports.ExportAllFrom = class {
  constructor({ moduleSpecifier }) {
    this.type = 'ExportAllFrom';
    this.moduleSpecifier = moduleSpecifier;
  }
};

exports.ExportDefault = class {
  constructor({ body }) {
    this.type = 'ExportDefault';
    this.body = body;
  }
};

exports.ExportFrom = class {
  constructor({ namedExports, moduleSpecifier }) {
    this.type = 'ExportFrom';
    this.namedExports = namedExports;
    this.moduleSpecifier = moduleSpecifier;
  }
};

exports.ExportFromSpecifier = class {
  constructor({ name, exportedName }) {
    this.type = 'ExportFromSpecifier';
    this.name = name;
    this.exportedName = exportedName;
  }
};

exports.ExportLocalSpecifier = class {
  constructor({ name, exportedName }) {
    this.type = 'ExportLocalSpecifier';
    this.name = name;
    this.exportedName = exportedName;
  }
};

exports.ExportLocals = class {
  constructor({ namedExports }) {
    this.type = 'ExportLocals';
    this.namedExports = namedExports;
  }
};

exports.ExpressionStatement = class {
  constructor({ expression }) {
    this.type = 'ExpressionStatement';
    this.expression = expression;
  }
};

exports.ForAwaitStatement = class {
  constructor({ left, right, body }) {
    this.type = 'ForAwaitStatement';
    this.left = left;
    this.right = right;
    this.body = body;
  }
};

exports.ForInStatement = class {
  constructor({ left, right, body }) {
    this.type = 'ForInStatement';
    this.left = left;
    this.right = right;
    this.body = body;
  }
};

exports.ForOfStatement = class {
  constructor({ left, right, body }) {
    this.type = 'ForOfStatement';
    this.left = left;
    this.right = right;
    this.body = body;
  }
};

exports.ForStatement = class {
  constructor({ init, test, update, body }) {
    this.type = 'ForStatement';
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }
};

exports.FormalParameters = class {
  constructor({ items, rest }) {
    this.type = 'FormalParameters';
    this.items = items;
    this.rest = rest;
  }
};

exports.FunctionBody = class {
  constructor({ directives, statements }) {
    this.type = 'FunctionBody';
    this.directives = directives;
    this.statements = statements;
  }
};

exports.FunctionDeclaration = class {
  constructor({ isAsync, isGenerator, name, params, body }) {
    this.type = 'FunctionDeclaration';
    this.isAsync = isAsync;
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
};

exports.FunctionExpression = class {
  constructor({ isAsync, isGenerator, name, params, body }) {
    this.type = 'FunctionExpression';
    this.isAsync = isAsync;
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
};

exports.Getter = class {
  constructor({ name, body }) {
    this.type = 'Getter';
    this.name = name;
    this.body = body;
  }
};

exports.IdentifierExpression = class {
  constructor({ name }) {
    this.type = 'IdentifierExpression';
    this.name = name;
  }
};

exports.IfStatement = class {
  constructor({ test, consequent, alternate }) {
    this.type = 'IfStatement';
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
};

exports.Import = class {
  constructor({ defaultBinding, namedImports, moduleSpecifier }) {
    this.type = 'Import';
    this.defaultBinding = defaultBinding;
    this.namedImports = namedImports;
    this.moduleSpecifier = moduleSpecifier;
  }
};

exports.ImportNamespace = class {
  constructor({ defaultBinding, namespaceBinding, moduleSpecifier }) {
    this.type = 'ImportNamespace';
    this.defaultBinding = defaultBinding;
    this.namespaceBinding = namespaceBinding;
    this.moduleSpecifier = moduleSpecifier;
  }
};

exports.ImportSpecifier = class {
  constructor({ name, binding }) {
    this.type = 'ImportSpecifier';
    this.name = name;
    this.binding = binding;
  }
};

exports.LabeledStatement = class {
  constructor({ label, body }) {
    this.type = 'LabeledStatement';
    this.label = label;
    this.body = body;
  }
};

exports.LiteralBooleanExpression = class {
  constructor({ value }) {
    this.type = 'LiteralBooleanExpression';
    this.value = value;
  }
};

exports.LiteralInfinityExpression = class {
  constructor() {
    this.type = 'LiteralInfinityExpression';
  }
};

exports.LiteralNullExpression = class {
  constructor() {
    this.type = 'LiteralNullExpression';
  }
};

exports.LiteralNumericExpression = class {
  constructor({ value }) {
    this.type = 'LiteralNumericExpression';
    this.value = value;
  }
};

exports.LiteralRegExpExpression = class {
  constructor({ pattern, global, ignoreCase, multiLine, dotAll, unicode, sticky }) {
    this.type = 'LiteralRegExpExpression';
    this.pattern = pattern;
    this.global = global;
    this.ignoreCase = ignoreCase;
    this.multiLine = multiLine;
    this.dotAll = dotAll;
    this.unicode = unicode;
    this.sticky = sticky;
  }
};

exports.LiteralStringExpression = class {
  constructor({ value }) {
    this.type = 'LiteralStringExpression';
    this.value = value;
  }
};

exports.Method = class {
  constructor({ isAsync, isGenerator, name, params, body }) {
    this.type = 'Method';
    this.isAsync = isAsync;
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
};

exports.Module = class {
  constructor({ directives, items }) {
    this.type = 'Module';
    this.directives = directives;
    this.items = items;
  }
};

exports.NewExpression = class {
  constructor({ callee, arguments: _arguments }) {
    this.type = 'NewExpression';
    this.callee = callee;
    this.arguments = _arguments;
  }
};

exports.NewTargetExpression = class {
  constructor() {
    this.type = 'NewTargetExpression';
  }
};

exports.ObjectAssignmentTarget = class {
  constructor({ properties, rest }) {
    this.type = 'ObjectAssignmentTarget';
    this.properties = properties;
    this.rest = rest;
  }
};

exports.ObjectBinding = class {
  constructor({ properties, rest }) {
    this.type = 'ObjectBinding';
    this.properties = properties;
    this.rest = rest;
  }
};

exports.ObjectExpression = class {
  constructor({ properties }) {
    this.type = 'ObjectExpression';
    this.properties = properties;
  }
};

exports.ReturnStatement = class {
  constructor({ expression }) {
    this.type = 'ReturnStatement';
    this.expression = expression;
  }
};

exports.Script = class {
  constructor({ directives, statements }) {
    this.type = 'Script';
    this.directives = directives;
    this.statements = statements;
  }
};

exports.Setter = class {
  constructor({ name, param, body }) {
    this.type = 'Setter';
    this.name = name;
    this.param = param;
    this.body = body;
  }
};

exports.ShorthandProperty = class {
  constructor({ name }) {
    this.type = 'ShorthandProperty';
    this.name = name;
  }
};

exports.SpreadElement = class {
  constructor({ expression }) {
    this.type = 'SpreadElement';
    this.expression = expression;
  }
};

exports.SpreadProperty = class {
  constructor({ expression }) {
    this.type = 'SpreadProperty';
    this.expression = expression;
  }
};

exports.StaticMemberAssignmentTarget = class {
  constructor({ object, property }) {
    this.type = 'StaticMemberAssignmentTarget';
    this.object = object;
    this.property = property;
  }
};

exports.StaticMemberExpression = class {
  constructor({ object, property }) {
    this.type = 'StaticMemberExpression';
    this.object = object;
    this.property = property;
  }
};

exports.StaticPropertyName = class {
  constructor({ value }) {
    this.type = 'StaticPropertyName';
    this.value = value;
  }
};

exports.Super = class {
  constructor() {
    this.type = 'Super';
  }
};

exports.SwitchCase = class {
  constructor({ test, consequent }) {
    this.type = 'SwitchCase';
    this.test = test;
    this.consequent = consequent;
  }
};

exports.SwitchDefault = class {
  constructor({ consequent }) {
    this.type = 'SwitchDefault';
    this.consequent = consequent;
  }
};

exports.SwitchStatement = class {
  constructor({ discriminant, cases }) {
    this.type = 'SwitchStatement';
    this.discriminant = discriminant;
    this.cases = cases;
  }
};

exports.SwitchStatementWithDefault = class {
  constructor({ discriminant, preDefaultCases, defaultCase, postDefaultCases }) {
    this.type = 'SwitchStatementWithDefault';
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }
};

exports.TemplateElement = class {
  constructor({ rawValue }) {
    this.type = 'TemplateElement';
    this.rawValue = rawValue;
  }
};

exports.TemplateExpression = class {
  constructor({ tag, elements }) {
    this.type = 'TemplateExpression';
    this.tag = tag;
    this.elements = elements;
  }
};

exports.ThisExpression = class {
  constructor() {
    this.type = 'ThisExpression';
  }
};

exports.ThrowStatement = class {
  constructor({ expression }) {
    this.type = 'ThrowStatement';
    this.expression = expression;
  }
};

exports.TryCatchStatement = class {
  constructor({ body, catchClause }) {
    this.type = 'TryCatchStatement';
    this.body = body;
    this.catchClause = catchClause;
  }
};

exports.TryFinallyStatement = class {
  constructor({ body, catchClause, finalizer }) {
    this.type = 'TryFinallyStatement';
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  }
};

exports.UnaryExpression = class {
  constructor({ operator, operand }) {
    this.type = 'UnaryExpression';
    this.operator = operator;
    this.operand = operand;
  }
};

exports.UpdateExpression = class {
  constructor({ isPrefix, operator, operand }) {
    this.type = 'UpdateExpression';
    this.isPrefix = isPrefix;
    this.operator = operator;
    this.operand = operand;
  }
};

exports.VariableDeclaration = class {
  constructor({ kind, declarators }) {
    this.type = 'VariableDeclaration';
    this.kind = kind;
    this.declarators = declarators;
  }
};

exports.VariableDeclarationStatement = class {
  constructor({ declaration }) {
    this.type = 'VariableDeclarationStatement';
    this.declaration = declaration;
  }
};

exports.VariableDeclarator = class {
  constructor({ binding, init }) {
    this.type = 'VariableDeclarator';
    this.binding = binding;
    this.init = init;
  }
};

exports.WhileStatement = class {
  constructor({ test, body }) {
    this.type = 'WhileStatement';
    this.test = test;
    this.body = body;
  }
};

exports.WithStatement = class {
  constructor({ object, body }) {
    this.type = 'WithStatement';
    this.object = object;
    this.body = body;
  }
};

exports.YieldExpression = class {
  constructor({ expression }) {
    this.type = 'YieldExpression';
    this.expression = expression;
  }
};

exports.YieldGeneratorExpression = class {
  constructor({ expression }) {
    this.type = 'YieldGeneratorExpression';
    this.expression = expression;
  }
};
