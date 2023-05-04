// Generated from c:\_DEV\gamemaker-language-parser\GameMakerLanguageParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GameMakerLanguageParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, OpenBracket=3, CloseBracket=4, 
		OpenParen=5, CloseParen=6, OpenBrace=7, CloseBrace=8, SemiColon=9, Comma=10, 
		Assign=11, Colon=12, Dot=13, PlusPlus=14, MinusMinus=15, Plus=16, Minus=17, 
		BitNot=18, Not=19, Multiply=20, Divide=21, IntegerDivide=22, Modulo=23, 
		Power=24, QuestionMark=25, NullCoalesce=26, NullCoalescingAssign=27, RightShiftArithmetic=28, 
		LeftShiftArithmetic=29, LessThan=30, MoreThan=31, LessThanEquals=32, GreaterThanEquals=33, 
		Equals_=34, NotEquals=35, BitAnd=36, BitXOr=37, BitOr=38, And=39, Or=40, 
		Xor=41, MultiplyAssign=42, DivideAssign=43, PlusAssign=44, MinusAssign=45, 
		ModulusAssign=46, LeftShiftArithmeticAssign=47, RightShiftArithmeticAssign=48, 
		BitAndAssign=49, BitXorAssign=50, BitOrAssign=51, NumberSign=52, DollarSign=53, 
		AtSign=54, UndefinedLiteral=55, NoOneLiteral=56, BooleanLiteral=57, IntegerLiteral=58, 
		DecimalLiteral=59, BinaryLiteral=60, HexIntegerLiteral=61, Break=62, Exit=63, 
		Do=64, Case=65, Else=66, New=67, Var=68, Catch=69, Finally=70, Return=71, 
		Continue=72, For=73, Switch=74, While=75, Until=76, Repeat=77, Function_=78, 
		With=79, Default=80, If=81, Then=82, Throw=83, Delete=84, Try=85, Enum=86, 
		Constructor=87, Static=88, Macro=89, Define=90, Region=91, EndRegion=92, 
		Identifier=93, StringLiteral=94, VerbatimStringLiteral=95, WhiteSpaces=96, 
		LineTerminator=97, UnexpectedCharacter=98, PpIdentifier=99, PpWhiteSpaces=100, 
		PpBodyCharacters=101, PpNewLineEscaped=102, PpEnd=103;
	public static final int
		RULE_program = 0, RULE_statementList = 1, RULE_statement = 2, RULE_block = 3, 
		RULE_ifStatement = 4, RULE_iterationStatement = 5, RULE_withStatement = 6, 
		RULE_switchStatement = 7, RULE_continueStatement = 8, RULE_breakStatement = 9, 
		RULE_exitStatement = 10, RULE_emptyStatement = 11, RULE_caseBlock = 12, 
		RULE_caseClauses = 13, RULE_caseClause = 14, RULE_defaultClause = 15, 
		RULE_returnStatement = 16, RULE_varDeclarationSequence = 17, RULE_varModifier = 18, 
		RULE_varDeclaration = 19, RULE_assignmentStatement = 20, RULE_assignableExpression = 21, 
		RULE_expressionSequence = 22, RULE_expression = 23, RULE_anonymousFunction = 24, 
		RULE_accessorPrefix = 25, RULE_arguments = 26, RULE_argument = 27, RULE_assignmentOperator = 28, 
		RULE_literal = 29, RULE_arrayLiteral = 30, RULE_elementList = 31, RULE_structLiteral = 32, 
		RULE_functionDeclaration = 33, RULE_functionArguments = 34, RULE_functionArgument = 35, 
		RULE_propertyAssignment = 36, RULE_propertyIdentifier = 37, RULE_identifier = 38, 
		RULE_constructorDeclaration = 39, RULE_enumDeclaration = 40, RULE_enumBody = 41, 
		RULE_macroStatement = 42, RULE_macroBody = 43, RULE_defineStatement = 44, 
		RULE_regionStatement = 45, RULE_keyword = 46, RULE_softKeyword = 47, RULE_propertySoftKeyword = 48, 
		RULE_eos = 49;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statementList", "statement", "block", "ifStatement", "iterationStatement", 
			"withStatement", "switchStatement", "continueStatement", "breakStatement", 
			"exitStatement", "emptyStatement", "caseBlock", "caseClauses", "caseClause", 
			"defaultClause", "returnStatement", "varDeclarationSequence", "varModifier", 
			"varDeclaration", "assignmentStatement", "assignableExpression", "expressionSequence", 
			"expression", "anonymousFunction", "accessorPrefix", "arguments", "argument", 
			"assignmentOperator", "literal", "arrayLiteral", "elementList", "structLiteral", 
			"functionDeclaration", "functionArguments", "functionArgument", "propertyAssignment", 
			"propertyIdentifier", "identifier", "constructorDeclaration", "enumDeclaration", 
			"enumBody", "macroStatement", "macroBody", "defineStatement", "regionStatement", 
			"keyword", "softKeyword", "propertySoftKeyword", "eos"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'['", "']'", "'('", "')'", null, null, "';'", "','", 
			null, "':'", "'.'", "'++'", "'--'", "'+'", "'-'", "'~'", null, "'*'", 
			"'/'", "'div'", null, "'**'", "'?'", "'??'", "'??='", "'>>'", "'<<'", 
			"'<'", "'>'", "'<='", "'>='", "'=='", null, "'&'", "'^'", "'|'", null, 
			null, null, "'*='", "'/='", "'+='", "'-='", "'%='", "'<<='", "'>>='", 
			"'&='", "'^='", "'|='", "'#'", "'$'", "'@'", "'undefined'", "'noone'", 
			null, null, null, null, null, "'break'", "'exit'", "'do'", "'case'", 
			"'else'", "'new'", "'var'", "'catch'", "'finally'", "'return'", "'continue'", 
			"'for'", "'switch'", "'while'", "'until'", "'repeat'", "'function'", 
			"'with'", "'default'", "'if'", "'then'", "'throw'", "'delete'", "'try'", 
			"'enum'", "'constructor'", "'static'", "'#macro'", "'#define'", "'#region'", 
			"'#endregion'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket", 
			"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
			"Assign", "Colon", "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", 
			"BitNot", "Not", "Multiply", "Divide", "IntegerDivide", "Modulo", "Power", 
			"QuestionMark", "NullCoalesce", "NullCoalescingAssign", "RightShiftArithmetic", 
			"LeftShiftArithmetic", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "BitAnd", "BitXOr", "BitOr", "And", "Or", "Xor", 
			"MultiplyAssign", "DivideAssign", "PlusAssign", "MinusAssign", "ModulusAssign", 
			"LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", "BitAndAssign", 
			"BitXorAssign", "BitOrAssign", "NumberSign", "DollarSign", "AtSign", 
			"UndefinedLiteral", "NoOneLiteral", "BooleanLiteral", "IntegerLiteral", 
			"DecimalLiteral", "BinaryLiteral", "HexIntegerLiteral", "Break", "Exit", 
			"Do", "Case", "Else", "New", "Var", "Catch", "Finally", "Return", "Continue", 
			"For", "Switch", "While", "Until", "Repeat", "Function_", "With", "Default", 
			"If", "Then", "Throw", "Delete", "Try", "Enum", "Constructor", "Static", 
			"Macro", "Define", "Region", "EndRegion", "Identifier", "StringLiteral", 
			"VerbatimStringLiteral", "WhiteSpaces", "LineTerminator", "UnexpectedCharacter", 
			"PpIdentifier", "PpWhiteSpaces", "PpBodyCharacters", "PpNewLineEscaped", 
			"PpEnd"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "GameMakerLanguageParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GameMakerLanguageParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(GameMakerLanguageParser.EOF, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(100);
				statementList();
				}
			}

			setState(103);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementListContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StatementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementList; }
	}

	public final StatementListContext statementList() throws RecognitionException {
		StatementListContext _localctx = new StatementListContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statementList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(106); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(105);
				statement();
				}
				}
				setState(108); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public EmptyStatementContext emptyStatement() {
			return getRuleContext(EmptyStatementContext.class,0);
		}
		public MacroStatementContext macroStatement() {
			return getRuleContext(MacroStatementContext.class,0);
		}
		public IterationStatementContext iterationStatement() {
			return getRuleContext(IterationStatementContext.class,0);
		}
		public VarDeclarationSequenceContext varDeclarationSequence() {
			return getRuleContext(VarDeclarationSequenceContext.class,0);
		}
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public WithStatementContext withStatement() {
			return getRuleContext(WithStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ExitStatementContext exitStatement() {
			return getRuleContext(ExitStatementContext.class,0);
		}
		public ConstructorDeclarationContext constructorDeclaration() {
			return getRuleContext(ConstructorDeclarationContext.class,0);
		}
		public FunctionDeclarationContext functionDeclaration() {
			return getRuleContext(FunctionDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public DefineStatementContext defineStatement() {
			return getRuleContext(DefineStatementContext.class,0);
		}
		public RegionStatementContext regionStatement() {
			return getRuleContext(RegionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(128);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(110);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(111);
				emptyStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(112);
				macroStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(113);
				iterationStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(114);
				varDeclarationSequence();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(115);
				assignmentStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(116);
				ifStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(117);
				returnStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(118);
				withStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(119);
				continueStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(120);
				switchStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(121);
				breakStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(122);
				exitStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(123);
				constructorDeclaration();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(124);
				functionDeclaration();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(125);
				enumDeclaration();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(126);
				defineStatement();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(127);
				regionStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(GameMakerLanguageParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(GameMakerLanguageParser.CloseBrace, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			match(OpenBrace);
			setState(132);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(131);
				statementList();
				}
			}

			setState(134);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode If() { return getToken(GameMakerLanguageParser.If, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode Then() { return getToken(GameMakerLanguageParser.Then, 0); }
		public TerminalNode Else() { return getToken(GameMakerLanguageParser.Else, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_ifStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(If);
			setState(137);
			expression(0);
			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Then) {
				{
				setState(138);
				match(Then);
				}
			}

			setState(141);
			statement();
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				setState(142);
				match(Else);
				setState(143);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IterationStatementContext extends ParserRuleContext {
		public IterationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_iterationStatement; }
	 
		public IterationStatementContext() { }
		public void copyFrom(IterationStatementContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DoStatementContext extends IterationStatementContext {
		public TerminalNode Do() { return getToken(GameMakerLanguageParser.Do, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode Until() { return getToken(GameMakerLanguageParser.Until, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public DoStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class WhileStatementContext extends IterationStatementContext {
		public TerminalNode While() { return getToken(GameMakerLanguageParser.While, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class ForStatementContext extends IterationStatementContext {
		public TerminalNode For() { return getToken(GameMakerLanguageParser.For, 0); }
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public List<TerminalNode> SemiColon() { return getTokens(GameMakerLanguageParser.SemiColon); }
		public TerminalNode SemiColon(int i) {
			return getToken(GameMakerLanguageParser.SemiColon, i);
		}
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public VarDeclarationSequenceContext varDeclarationSequence() {
			return getRuleContext(VarDeclarationSequenceContext.class,0);
		}
		public AssignmentStatementContext assignmentStatement() {
			return getRuleContext(AssignmentStatementContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}
	public static class RepeatStatementContext extends IterationStatementContext {
		public TerminalNode Repeat() { return getToken(GameMakerLanguageParser.Repeat, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public RepeatStatementContext(IterationStatementContext ctx) { copyFrom(ctx); }
	}

	public final IterationStatementContext iterationStatement() throws RecognitionException {
		IterationStatementContext _localctx = new IterationStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_iterationStatement);
		int _la;
		try {
			setState(176);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Do:
				_localctx = new DoStatementContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(146);
				match(Do);
				setState(147);
				statement();
				setState(148);
				match(Until);
				setState(149);
				expression(0);
				setState(150);
				eos();
				}
				break;
			case While:
				_localctx = new WhileStatementContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(152);
				match(While);
				setState(153);
				expression(0);
				setState(154);
				statement();
				}
				break;
			case For:
				_localctx = new ForStatementContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(156);
				match(For);
				setState(157);
				match(OpenParen);
				setState(160);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Var:
				case Static:
					{
					setState(158);
					varDeclarationSequence();
					}
					break;
				case OpenParen:
				case Constructor:
				case Identifier:
					{
					setState(159);
					assignmentStatement();
					}
					break;
				case SemiColon:
					break;
				default:
					break;
				}
				setState(162);
				match(SemiColon);
				setState(164);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << UndefinedLiteral) | (1L << NoOneLiteral) | (1L << BooleanLiteral) | (1L << IntegerLiteral) | (1L << DecimalLiteral) | (1L << BinaryLiteral) | (1L << HexIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (New - 67)) | (1L << (Function_ - 67)) | (1L << (Delete - 67)) | (1L << (Constructor - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)) | (1L << (VerbatimStringLiteral - 67)))) != 0)) {
					{
					setState(163);
					expression(0);
					}
				}

				setState(166);
				match(SemiColon);
				setState(168);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0)) {
					{
					setState(167);
					statement();
					}
				}

				setState(170);
				match(CloseParen);
				setState(171);
				statement();
				}
				break;
			case Repeat:
				_localctx = new RepeatStatementContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(172);
				match(Repeat);
				setState(173);
				expression(0);
				setState(174);
				statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithStatementContext extends ParserRuleContext {
		public TerminalNode With() { return getToken(GameMakerLanguageParser.With, 0); }
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WithStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withStatement; }
	}

	public final WithStatementContext withStatement() throws RecognitionException {
		WithStatementContext _localctx = new WithStatementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_withStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(With);
			setState(179);
			match(OpenParen);
			setState(180);
			expression(0);
			setState(181);
			match(CloseParen);
			setState(182);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode Switch() { return getToken(GameMakerLanguageParser.Switch, 0); }
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public CaseBlockContext caseBlock() {
			return getRuleContext(CaseBlockContext.class,0);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_switchStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(Switch);
			setState(185);
			match(OpenParen);
			setState(186);
			expression(0);
			setState(187);
			match(CloseParen);
			setState(188);
			caseBlock();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode Continue() { return getToken(GameMakerLanguageParser.Continue, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(Continue);
			setState(191);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(GameMakerLanguageParser.Break, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(Break);
			setState(194);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExitStatementContext extends ParserRuleContext {
		public TerminalNode Exit() { return getToken(GameMakerLanguageParser.Exit, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExitStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exitStatement; }
	}

	public final ExitStatementContext exitStatement() throws RecognitionException {
		ExitStatementContext _localctx = new ExitStatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_exitStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(196);
			match(Exit);
			setState(197);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmptyStatementContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(GameMakerLanguageParser.SemiColon, 0); }
		public EmptyStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyStatement; }
	}

	public final EmptyStatementContext emptyStatement() throws RecognitionException {
		EmptyStatementContext _localctx = new EmptyStatementContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_emptyStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(SemiColon);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseBlockContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(GameMakerLanguageParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(GameMakerLanguageParser.CloseBrace, 0); }
		public List<CaseClausesContext> caseClauses() {
			return getRuleContexts(CaseClausesContext.class);
		}
		public CaseClausesContext caseClauses(int i) {
			return getRuleContext(CaseClausesContext.class,i);
		}
		public DefaultClauseContext defaultClause() {
			return getRuleContext(DefaultClauseContext.class,0);
		}
		public CaseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseBlock; }
	}

	public final CaseBlockContext caseBlock() throws RecognitionException {
		CaseBlockContext _localctx = new CaseBlockContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_caseBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(OpenBrace);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Case) {
				{
				setState(202);
				caseClauses();
				}
			}

			setState(209);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Default) {
				{
				setState(205);
				defaultClause();
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Case) {
					{
					setState(206);
					caseClauses();
					}
				}

				}
			}

			setState(211);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClausesContext extends ParserRuleContext {
		public List<CaseClauseContext> caseClause() {
			return getRuleContexts(CaseClauseContext.class);
		}
		public CaseClauseContext caseClause(int i) {
			return getRuleContext(CaseClauseContext.class,i);
		}
		public CaseClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClauses; }
	}

	public final CaseClausesContext caseClauses() throws RecognitionException {
		CaseClausesContext _localctx = new CaseClausesContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_caseClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(213);
				caseClause();
				}
				}
				setState(216); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Case );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CaseClauseContext extends ParserRuleContext {
		public TerminalNode Case() { return getToken(GameMakerLanguageParser.Case, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode Colon() { return getToken(GameMakerLanguageParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public CaseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caseClause; }
	}

	public final CaseClauseContext caseClause() throws RecognitionException {
		CaseClauseContext _localctx = new CaseClauseContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_caseClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(Case);
			setState(219);
			expressionSequence();
			setState(220);
			match(Colon);
			setState(222);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(221);
				statementList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefaultClauseContext extends ParserRuleContext {
		public TerminalNode Default() { return getToken(GameMakerLanguageParser.Default, 0); }
		public TerminalNode Colon() { return getToken(GameMakerLanguageParser.Colon, 0); }
		public StatementListContext statementList() {
			return getRuleContext(StatementListContext.class,0);
		}
		public DefaultClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defaultClause; }
	}

	public final DefaultClauseContext defaultClause() throws RecognitionException {
		DefaultClauseContext _localctx = new DefaultClauseContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_defaultClause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			match(Default);
			setState(225);
			match(Colon);
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenParen) | (1L << OpenBrace) | (1L << SemiColon) | (1L << Break) | (1L << Exit))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (Do - 64)) | (1L << (Var - 64)) | (1L << (Return - 64)) | (1L << (Continue - 64)) | (1L << (For - 64)) | (1L << (Switch - 64)) | (1L << (While - 64)) | (1L << (Repeat - 64)) | (1L << (Function_ - 64)) | (1L << (With - 64)) | (1L << (If - 64)) | (1L << (Enum - 64)) | (1L << (Constructor - 64)) | (1L << (Static - 64)) | (1L << (Macro - 64)) | (1L << (Define - 64)) | (1L << (Region - 64)) | (1L << (EndRegion - 64)) | (1L << (Identifier - 64)))) != 0)) {
				{
				setState(226);
				statementList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode Return() { return getToken(GameMakerLanguageParser.Return, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_returnStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			match(Return);
			setState(231);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(230);
				expression(0);
				}
				break;
			}
			setState(233);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclarationSequenceContext extends ParserRuleContext {
		public VarModifierContext varModifier() {
			return getRuleContext(VarModifierContext.class,0);
		}
		public List<VarDeclarationContext> varDeclaration() {
			return getRuleContexts(VarDeclarationContext.class);
		}
		public VarDeclarationContext varDeclaration(int i) {
			return getRuleContext(VarDeclarationContext.class,i);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public VarDeclarationSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDeclarationSequence; }
	}

	public final VarDeclarationSequenceContext varDeclarationSequence() throws RecognitionException {
		VarDeclarationSequenceContext _localctx = new VarDeclarationSequenceContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_varDeclarationSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(235);
			varModifier();
			setState(236);
			varDeclaration();
			setState(241);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(237);
					match(Comma);
					setState(238);
					varDeclaration();
					}
					} 
				}
				setState(243);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			}
			setState(244);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarModifierContext extends ParserRuleContext {
		public List<TerminalNode> Var() { return getTokens(GameMakerLanguageParser.Var); }
		public TerminalNode Var(int i) {
			return getToken(GameMakerLanguageParser.Var, i);
		}
		public TerminalNode Static() { return getToken(GameMakerLanguageParser.Static, 0); }
		public VarModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varModifier; }
	}

	public final VarModifierContext varModifier() throws RecognitionException {
		VarModifierContext _localctx = new VarModifierContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_varModifier);
		int _la;
		try {
			setState(252);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Var:
				enterOuterAlt(_localctx, 1);
				{
				setState(247); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(246);
					match(Var);
					}
					}
					setState(249); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==Var );
				}
				break;
			case Static:
				enterOuterAlt(_localctx, 2);
				{
				setState(251);
				match(Static);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarDeclarationContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Assign() { return getToken(GameMakerLanguageParser.Assign, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VarDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDeclaration; }
	}

	public final VarDeclarationContext varDeclaration() throws RecognitionException {
		VarDeclarationContext _localctx = new VarDeclarationContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_varDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			identifier();
			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(255);
				match(Assign);
				setState(256);
				expression(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentStatementContext extends ParserRuleContext {
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public AssignmentOperatorContext assignmentOperator() {
			return getRuleContext(AssignmentOperatorContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AssignmentStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentStatement; }
	}

	public final AssignmentStatementContext assignmentStatement() throws RecognitionException {
		AssignmentStatementContext _localctx = new AssignmentStatementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_assignmentStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			assignableExpression(0);
			setState(260);
			assignmentOperator();
			setState(261);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignableExpressionContext extends ParserRuleContext {
		public AssignableExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignableExpression; }
	 
		public AssignableExpressionContext() { }
		public void copyFrom(AssignableExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MemberDotAssignableContext extends AssignableExpressionContext {
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(GameMakerLanguageParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MemberDotAssignableContext(AssignableExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberIndexAssignableContext extends AssignableExpressionContext {
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(GameMakerLanguageParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(GameMakerLanguageParser.CloseBracket, 0); }
		public AccessorPrefixContext accessorPrefix() {
			return getRuleContext(AccessorPrefixContext.class,0);
		}
		public MemberIndexAssignableContext(AssignableExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierAssignableContext extends AssignableExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierAssignableContext(AssignableExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedAssignableContext extends AssignableExpressionContext {
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public ParenthesizedAssignableContext(AssignableExpressionContext ctx) { copyFrom(ctx); }
	}

	public final AssignableExpressionContext assignableExpression() throws RecognitionException {
		return assignableExpression(0);
	}

	private AssignableExpressionContext assignableExpression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		AssignableExpressionContext _localctx = new AssignableExpressionContext(_ctx, _parentState);
		AssignableExpressionContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_assignableExpression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Constructor:
			case Identifier:
				{
				_localctx = new IdentifierAssignableContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(264);
				identifier();
				}
				break;
			case OpenParen:
				{
				_localctx = new ParenthesizedAssignableContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(265);
				match(OpenParen);
				setState(266);
				assignableExpression(0);
				setState(267);
				match(CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(284);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(282);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
					case 1:
						{
						_localctx = new MemberIndexAssignableContext(new AssignableExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_assignableExpression);
						setState(271);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(272);
						match(OpenBracket);
						setState(274);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << QuestionMark) | (1L << BitOr) | (1L << NumberSign) | (1L << DollarSign) | (1L << AtSign))) != 0)) {
							{
							setState(273);
							accessorPrefix();
							}
						}

						setState(276);
						expressionSequence();
						setState(277);
						match(CloseBracket);
						}
						break;
					case 2:
						{
						_localctx = new MemberDotAssignableContext(new AssignableExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_assignableExpression);
						setState(279);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(280);
						match(Dot);
						setState(281);
						identifier();
						}
						break;
					}
					} 
				}
				setState(286);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(287);
			expression(0);
			setState(292);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(288);
				match(Comma);
				setState(289);
				expression(0);
				}
				}
				setState(294);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TernaryExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode QuestionMark() { return getToken(GameMakerLanguageParser.QuestionMark, 0); }
		public TerminalNode Colon() { return getToken(GameMakerLanguageParser.Colon, 0); }
		public TernaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalAndExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode And() { return getToken(GameMakerLanguageParser.And, 0); }
		public LogicalAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreIncrementExpressionContext extends ExpressionContext {
		public TerminalNode PlusPlus() { return getToken(GameMakerLanguageParser.PlusPlus, 0); }
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public PreIncrementExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalOrExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Or() { return getToken(GameMakerLanguageParser.Or, 0); }
		public LogicalOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NotExpressionContext extends ExpressionContext {
		public TerminalNode Not() { return getToken(GameMakerLanguageParser.Not, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public NotExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PreDecreaseExpressionContext extends ExpressionContext {
		public TerminalNode MinusMinus() { return getToken(GameMakerLanguageParser.MinusMinus, 0); }
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public PreDecreaseExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ArgumentsExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ArgumentsExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionExpressionContext extends ExpressionContext {
		public AnonymousFunctionContext anonymousFunction() {
			return getRuleContext(AnonymousFunctionContext.class,0);
		}
		public FunctionExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostDecreaseExpressionContext extends ExpressionContext {
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public TerminalNode MinusMinus() { return getToken(GameMakerLanguageParser.MinusMinus, 0); }
		public PostDecreaseExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class UnaryMinusExpressionContext extends ExpressionContext {
		public TerminalNode Minus() { return getToken(GameMakerLanguageParser.Minus, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public UnaryMinusExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class DeleteExpressionContext extends ExpressionContext {
		public TerminalNode Delete() { return getToken(GameMakerLanguageParser.Delete, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DeleteExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Equals_() { return getToken(GameMakerLanguageParser.Equals_, 0); }
		public TerminalNode Assign() { return getToken(GameMakerLanguageParser.Assign, 0); }
		public TerminalNode NotEquals() { return getToken(GameMakerLanguageParser.NotEquals, 0); }
		public EqualityExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitXOrExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BitXOr() { return getToken(GameMakerLanguageParser.BitXOr, 0); }
		public BitXOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(GameMakerLanguageParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(GameMakerLanguageParser.Divide, 0); }
		public TerminalNode Modulo() { return getToken(GameMakerLanguageParser.Modulo, 0); }
		public TerminalNode IntegerDivide() { return getToken(GameMakerLanguageParser.IntegerDivide, 0); }
		public MultiplicativeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitShiftExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LeftShiftArithmetic() { return getToken(GameMakerLanguageParser.LeftShiftArithmetic, 0); }
		public TerminalNode RightShiftArithmetic() { return getToken(GameMakerLanguageParser.RightShiftArithmetic, 0); }
		public BitShiftExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesizedExpressionContext extends ExpressionContext {
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public ParenthesizedExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class PostIncrementExpressionContext extends ExpressionContext {
		public AssignableExpressionContext assignableExpression() {
			return getRuleContext(AssignableExpressionContext.class,0);
		}
		public TerminalNode PlusPlus() { return getToken(GameMakerLanguageParser.PlusPlus, 0); }
		public PostIncrementExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(GameMakerLanguageParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(GameMakerLanguageParser.Minus, 0); }
		public AdditiveExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(GameMakerLanguageParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(GameMakerLanguageParser.MoreThan, 0); }
		public TerminalNode LessThanEquals() { return getToken(GameMakerLanguageParser.LessThanEquals, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(GameMakerLanguageParser.GreaterThanEquals, 0); }
		public RelationalExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitNotExpressionContext extends ExpressionContext {
		public TerminalNode BitNot() { return getToken(GameMakerLanguageParser.BitNot, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BitNotExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class NewExpressionContext extends ExpressionContext {
		public TerminalNode New() { return getToken(GameMakerLanguageParser.New, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public NewExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends ExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberDotExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode Dot() { return getToken(GameMakerLanguageParser.Dot, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public MemberDotExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MemberIndexExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(GameMakerLanguageParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(GameMakerLanguageParser.CloseBracket, 0); }
		public AccessorPrefixContext accessorPrefix() {
			return getRuleContext(AccessorPrefixContext.class,0);
		}
		public MemberIndexExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends ExpressionContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentifierExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitAndExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BitAnd() { return getToken(GameMakerLanguageParser.BitAnd, 0); }
		public BitAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LogicalXorExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Xor() { return getToken(GameMakerLanguageParser.Xor, 0); }
		public LogicalXorExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class BitOrExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BitOr() { return getToken(GameMakerLanguageParser.BitOr, 0); }
		public BitOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class CoalesceExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode NullCoalesce() { return getToken(GameMakerLanguageParser.NullCoalesce, 0); }
		public CoalesceExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 46;
		enterRecursionRule(_localctx, 46, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(325);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				{
				_localctx = new FunctionExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(296);
				anonymousFunction();
				}
				break;
			case 2:
				{
				_localctx = new NewExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(297);
				match(New);
				setState(298);
				identifier();
				setState(299);
				arguments();
				}
				break;
			case 3:
				{
				_localctx = new DeleteExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(301);
				match(Delete);
				setState(302);
				expression(25);
				}
				break;
			case 4:
				{
				_localctx = new PostIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(303);
				assignableExpression(0);
				setState(304);
				match(PlusPlus);
				}
				break;
			case 5:
				{
				_localctx = new PostDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(306);
				assignableExpression(0);
				setState(307);
				match(MinusMinus);
				}
				break;
			case 6:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(309);
				match(PlusPlus);
				setState(310);
				assignableExpression(0);
				}
				break;
			case 7:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(311);
				match(MinusMinus);
				setState(312);
				assignableExpression(0);
				}
				break;
			case 8:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(313);
				match(Minus);
				setState(314);
				expression(19);
				}
				break;
			case 9:
				{
				_localctx = new BitNotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(315);
				match(BitNot);
				setState(316);
				expression(18);
				}
				break;
			case 10:
				{
				_localctx = new NotExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(317);
				match(Not);
				setState(318);
				expression(17);
				}
				break;
			case 11:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(319);
				identifier();
				}
				break;
			case 12:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(320);
				literal();
				}
				break;
			case 13:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(321);
				match(OpenParen);
				setState(322);
				expression(0);
				setState(323);
				match(CloseParen);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(384);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(382);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(327);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(328);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << IntegerDivide) | (1L << Modulo))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(329);
						expression(17);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(330);
						if (!(precpred(_ctx, 15))) throw new FailedPredicateException(this, "precpred(_ctx, 15)");
						setState(331);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(332);
						expression(16);
						}
						break;
					case 3:
						{
						_localctx = new CoalesceExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(333);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(334);
						match(NullCoalesce);
						setState(335);
						expression(15);
						}
						break;
					case 4:
						{
						_localctx = new BitShiftExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(336);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(337);
						_la = _input.LA(1);
						if ( !(_la==RightShiftArithmetic || _la==LeftShiftArithmetic) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(338);
						expression(14);
						}
						break;
					case 5:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(339);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(340);
						match(Or);
						setState(341);
						expression(13);
						}
						break;
					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(342);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(343);
						match(And);
						setState(344);
						expression(12);
						}
						break;
					case 7:
						{
						_localctx = new LogicalXorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(345);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(346);
						match(Xor);
						setState(347);
						expression(11);
						}
						break;
					case 8:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(348);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(349);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Assign) | (1L << Equals_) | (1L << NotEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(350);
						expression(10);
						}
						break;
					case 9:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(351);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(352);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << MoreThan) | (1L << LessThanEquals) | (1L << GreaterThanEquals))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(353);
						expression(9);
						}
						break;
					case 10:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(354);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(355);
						match(BitAnd);
						setState(356);
						expression(8);
						}
						break;
					case 11:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(357);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(358);
						match(BitOr);
						setState(359);
						expression(7);
						}
						break;
					case 12:
						{
						_localctx = new BitXOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(360);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(361);
						match(BitXOr);
						setState(362);
						expression(6);
						}
						break;
					case 13:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(363);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(364);
						match(QuestionMark);
						setState(365);
						expression(0);
						setState(366);
						match(Colon);
						setState(367);
						expression(5);
						}
						break;
					case 14:
						{
						_localctx = new MemberIndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(369);
						if (!(precpred(_ctx, 28))) throw new FailedPredicateException(this, "precpred(_ctx, 28)");
						setState(370);
						match(OpenBracket);
						setState(372);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << QuestionMark) | (1L << BitOr) | (1L << NumberSign) | (1L << DollarSign) | (1L << AtSign))) != 0)) {
							{
							setState(371);
							accessorPrefix();
							}
						}

						setState(374);
						expressionSequence();
						setState(375);
						match(CloseBracket);
						}
						break;
					case 15:
						{
						_localctx = new MemberDotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(377);
						if (!(precpred(_ctx, 27))) throw new FailedPredicateException(this, "precpred(_ctx, 27)");
						setState(378);
						match(Dot);
						setState(379);
						identifier();
						}
						break;
					case 16:
						{
						_localctx = new ArgumentsExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(380);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(381);
						arguments();
						}
						break;
					}
					} 
				}
				setState(386);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class AnonymousFunctionContext extends ParserRuleContext {
		public TerminalNode Function_() { return getToken(GameMakerLanguageParser.Function_, 0); }
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public AnonymousFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anonymousFunction; }
	}

	public final AnonymousFunctionContext anonymousFunction() throws RecognitionException {
		AnonymousFunctionContext _localctx = new AnonymousFunctionContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_anonymousFunction);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			match(Function_);
			setState(388);
			arguments();
			setState(389);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AccessorPrefixContext extends ParserRuleContext {
		public TerminalNode NumberSign() { return getToken(GameMakerLanguageParser.NumberSign, 0); }
		public TerminalNode AtSign() { return getToken(GameMakerLanguageParser.AtSign, 0); }
		public TerminalNode DollarSign() { return getToken(GameMakerLanguageParser.DollarSign, 0); }
		public TerminalNode QuestionMark() { return getToken(GameMakerLanguageParser.QuestionMark, 0); }
		public TerminalNode BitOr() { return getToken(GameMakerLanguageParser.BitOr, 0); }
		public AccessorPrefixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accessorPrefix; }
	}

	public final AccessorPrefixContext accessorPrefix() throws RecognitionException {
		AccessorPrefixContext _localctx = new AccessorPrefixContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_accessorPrefix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << QuestionMark) | (1L << BitOr) | (1L << NumberSign) | (1L << DollarSign) | (1L << AtSign))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_arguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			match(OpenParen);
			setState(405);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << UndefinedLiteral) | (1L << NoOneLiteral) | (1L << BooleanLiteral) | (1L << IntegerLiteral) | (1L << DecimalLiteral) | (1L << BinaryLiteral) | (1L << HexIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (New - 67)) | (1L << (Function_ - 67)) | (1L << (Delete - 67)) | (1L << (Constructor - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)) | (1L << (VerbatimStringLiteral - 67)))) != 0)) {
				{
				setState(394);
				argument();
				setState(399);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(395);
						match(Comma);
						setState(396);
						argument();
						}
						} 
					}
					setState(401);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
				}
				setState(403);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(402);
					match(Comma);
					}
				}

				}
			}

			setState(407);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_argument);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(409);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentOperatorContext extends ParserRuleContext {
		public TerminalNode MultiplyAssign() { return getToken(GameMakerLanguageParser.MultiplyAssign, 0); }
		public TerminalNode DivideAssign() { return getToken(GameMakerLanguageParser.DivideAssign, 0); }
		public TerminalNode ModulusAssign() { return getToken(GameMakerLanguageParser.ModulusAssign, 0); }
		public TerminalNode PlusAssign() { return getToken(GameMakerLanguageParser.PlusAssign, 0); }
		public TerminalNode MinusAssign() { return getToken(GameMakerLanguageParser.MinusAssign, 0); }
		public TerminalNode LeftShiftArithmeticAssign() { return getToken(GameMakerLanguageParser.LeftShiftArithmeticAssign, 0); }
		public TerminalNode RightShiftArithmeticAssign() { return getToken(GameMakerLanguageParser.RightShiftArithmeticAssign, 0); }
		public TerminalNode BitAndAssign() { return getToken(GameMakerLanguageParser.BitAndAssign, 0); }
		public TerminalNode BitXorAssign() { return getToken(GameMakerLanguageParser.BitXorAssign, 0); }
		public TerminalNode BitOrAssign() { return getToken(GameMakerLanguageParser.BitOrAssign, 0); }
		public TerminalNode NullCoalescingAssign() { return getToken(GameMakerLanguageParser.NullCoalescingAssign, 0); }
		public TerminalNode Assign() { return getToken(GameMakerLanguageParser.Assign, 0); }
		public AssignmentOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentOperator; }
	}

	public final AssignmentOperatorContext assignmentOperator() throws RecognitionException {
		AssignmentOperatorContext _localctx = new AssignmentOperatorContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_assignmentOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(411);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Assign) | (1L << NullCoalescingAssign) | (1L << MultiplyAssign) | (1L << DivideAssign) | (1L << PlusAssign) | (1L << MinusAssign) | (1L << ModulusAssign) | (1L << LeftShiftArithmeticAssign) | (1L << RightShiftArithmeticAssign) | (1L << BitAndAssign) | (1L << BitXorAssign) | (1L << BitOrAssign))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode UndefinedLiteral() { return getToken(GameMakerLanguageParser.UndefinedLiteral, 0); }
		public TerminalNode NoOneLiteral() { return getToken(GameMakerLanguageParser.NoOneLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(GameMakerLanguageParser.BooleanLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(GameMakerLanguageParser.StringLiteral, 0); }
		public TerminalNode VerbatimStringLiteral() { return getToken(GameMakerLanguageParser.VerbatimStringLiteral, 0); }
		public TerminalNode HexIntegerLiteral() { return getToken(GameMakerLanguageParser.HexIntegerLiteral, 0); }
		public TerminalNode BinaryLiteral() { return getToken(GameMakerLanguageParser.BinaryLiteral, 0); }
		public TerminalNode DecimalLiteral() { return getToken(GameMakerLanguageParser.DecimalLiteral, 0); }
		public TerminalNode IntegerLiteral() { return getToken(GameMakerLanguageParser.IntegerLiteral, 0); }
		public ArrayLiteralContext arrayLiteral() {
			return getRuleContext(ArrayLiteralContext.class,0);
		}
		public StructLiteralContext structLiteral() {
			return getRuleContext(StructLiteralContext.class,0);
		}
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_literal);
		try {
			setState(424);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case UndefinedLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(413);
				match(UndefinedLiteral);
				}
				break;
			case NoOneLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(414);
				match(NoOneLiteral);
				}
				break;
			case BooleanLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(415);
				match(BooleanLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 4);
				{
				setState(416);
				match(StringLiteral);
				}
				break;
			case VerbatimStringLiteral:
				enterOuterAlt(_localctx, 5);
				{
				setState(417);
				match(VerbatimStringLiteral);
				}
				break;
			case HexIntegerLiteral:
				enterOuterAlt(_localctx, 6);
				{
				setState(418);
				match(HexIntegerLiteral);
				}
				break;
			case BinaryLiteral:
				enterOuterAlt(_localctx, 7);
				{
				setState(419);
				match(BinaryLiteral);
				}
				break;
			case DecimalLiteral:
				enterOuterAlt(_localctx, 8);
				{
				setState(420);
				match(DecimalLiteral);
				}
				break;
			case IntegerLiteral:
				enterOuterAlt(_localctx, 9);
				{
				setState(421);
				match(IntegerLiteral);
				}
				break;
			case OpenBracket:
				enterOuterAlt(_localctx, 10);
				{
				setState(422);
				arrayLiteral();
				}
				break;
			case OpenBrace:
				enterOuterAlt(_localctx, 11);
				{
				setState(423);
				structLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBracket() { return getToken(GameMakerLanguageParser.OpenBracket, 0); }
		public ElementListContext elementList() {
			return getRuleContext(ElementListContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(GameMakerLanguageParser.CloseBracket, 0); }
		public ArrayLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayLiteral; }
	}

	public final ArrayLiteralContext arrayLiteral() throws RecognitionException {
		ArrayLiteralContext _localctx = new ArrayLiteralContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_arrayLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(OpenBracket);
			setState(427);
			elementList();
			setState(428);
			match(CloseBracket);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementListContext extends ParserRuleContext {
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ElementListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementList; }
	}

	public final ElementListContext elementList() throws RecognitionException {
		ElementListContext _localctx = new ElementListContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_elementList);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(430);
					match(Comma);
					}
					} 
				}
				setState(435);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			}
			setState(437);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OpenBracket) | (1L << OpenParen) | (1L << OpenBrace) | (1L << PlusPlus) | (1L << MinusMinus) | (1L << Minus) | (1L << BitNot) | (1L << Not) | (1L << UndefinedLiteral) | (1L << NoOneLiteral) | (1L << BooleanLiteral) | (1L << IntegerLiteral) | (1L << DecimalLiteral) | (1L << BinaryLiteral) | (1L << HexIntegerLiteral))) != 0) || ((((_la - 67)) & ~0x3f) == 0 && ((1L << (_la - 67)) & ((1L << (New - 67)) | (1L << (Function_ - 67)) | (1L << (Delete - 67)) | (1L << (Constructor - 67)) | (1L << (Identifier - 67)) | (1L << (StringLiteral - 67)) | (1L << (VerbatimStringLiteral - 67)))) != 0)) {
				{
				setState(436);
				expression(0);
				}
			}

			setState(447);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(440); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(439);
						match(Comma);
						}
						}
						setState(442); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==Comma );
					setState(444);
					expression(0);
					}
					} 
				}
				setState(449);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			}
			setState(453);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(450);
				match(Comma);
				}
				}
				setState(455);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StructLiteralContext extends ParserRuleContext {
		public TerminalNode OpenBrace() { return getToken(GameMakerLanguageParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(GameMakerLanguageParser.CloseBrace, 0); }
		public List<PropertyAssignmentContext> propertyAssignment() {
			return getRuleContexts(PropertyAssignmentContext.class);
		}
		public PropertyAssignmentContext propertyAssignment(int i) {
			return getRuleContext(PropertyAssignmentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public StructLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_structLiteral; }
	}

	public final StructLiteralContext structLiteral() throws RecognitionException {
		StructLiteralContext _localctx = new StructLiteralContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_structLiteral);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(456);
			match(OpenBrace);
			setState(468);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 56)) & ~0x3f) == 0 && ((1L << (_la - 56)) & ((1L << (NoOneLiteral - 56)) | (1L << (Constructor - 56)) | (1L << (Identifier - 56)))) != 0)) {
				{
				setState(457);
				propertyAssignment();
				setState(462);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(458);
						match(Comma);
						setState(459);
						propertyAssignment();
						}
						} 
					}
					setState(464);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,39,_ctx);
				}
				setState(466);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(465);
					match(Comma);
					}
				}

				}
			}

			setState(470);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionDeclarationContext extends ParserRuleContext {
		public TerminalNode Function_() { return getToken(GameMakerLanguageParser.Function_, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public FunctionDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDeclaration; }
	}

	public final FunctionDeclarationContext functionDeclaration() throws RecognitionException {
		FunctionDeclarationContext _localctx = new FunctionDeclarationContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_functionDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(472);
			match(Function_);
			setState(473);
			identifier();
			setState(474);
			functionArguments();
			setState(475);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionArgumentsContext extends ParserRuleContext {
		public TerminalNode OpenParen() { return getToken(GameMakerLanguageParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(GameMakerLanguageParser.CloseParen, 0); }
		public List<FunctionArgumentContext> functionArgument() {
			return getRuleContexts(FunctionArgumentContext.class);
		}
		public FunctionArgumentContext functionArgument(int i) {
			return getRuleContext(FunctionArgumentContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public FunctionArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionArguments; }
	}

	public final FunctionArgumentsContext functionArguments() throws RecognitionException {
		FunctionArgumentsContext _localctx = new FunctionArgumentsContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_functionArguments);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(477);
			match(OpenParen);
			setState(489);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Constructor || _la==Identifier) {
				{
				setState(478);
				functionArgument();
				setState(483);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(479);
						match(Comma);
						setState(480);
						functionArgument();
						}
						} 
					}
					setState(485);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
				}
				setState(487);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(486);
					match(Comma);
					}
				}

				}
			}

			setState(491);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunctionArgumentContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode Assign() { return getToken(GameMakerLanguageParser.Assign, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public FunctionArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionArgument; }
	}

	public final FunctionArgumentContext functionArgument() throws RecognitionException {
		FunctionArgumentContext _localctx = new FunctionArgumentContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_functionArgument);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(493);
			identifier();
			setState(496);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Assign) {
				{
				setState(494);
				match(Assign);
				setState(495);
				expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyAssignmentContext extends ParserRuleContext {
		public PropertyIdentifierContext propertyIdentifier() {
			return getRuleContext(PropertyIdentifierContext.class,0);
		}
		public TerminalNode Colon() { return getToken(GameMakerLanguageParser.Colon, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public PropertyAssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyAssignment; }
	}

	public final PropertyAssignmentContext propertyAssignment() throws RecognitionException {
		PropertyAssignmentContext _localctx = new PropertyAssignmentContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_propertyAssignment);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(498);
			propertyIdentifier();
			setState(499);
			match(Colon);
			setState(500);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyIdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(GameMakerLanguageParser.Identifier, 0); }
		public SoftKeywordContext softKeyword() {
			return getRuleContext(SoftKeywordContext.class,0);
		}
		public PropertySoftKeywordContext propertySoftKeyword() {
			return getRuleContext(PropertySoftKeywordContext.class,0);
		}
		public PropertyIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyIdentifier; }
	}

	public final PropertyIdentifierContext propertyIdentifier() throws RecognitionException {
		PropertyIdentifierContext _localctx = new PropertyIdentifierContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_propertyIdentifier);
		try {
			setState(505);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(502);
				match(Identifier);
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 2);
				{
				setState(503);
				softKeyword();
				}
				break;
			case NoOneLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(504);
				propertySoftKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(GameMakerLanguageParser.Identifier, 0); }
		public SoftKeywordContext softKeyword() {
			return getRuleContext(SoftKeywordContext.class,0);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_identifier);
		try {
			setState(509);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(507);
				match(Identifier);
				}
				break;
			case Constructor:
				enterOuterAlt(_localctx, 2);
				{
				setState(508);
				softKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstructorDeclarationContext extends ParserRuleContext {
		public TerminalNode Function_() { return getToken(GameMakerLanguageParser.Function_, 0); }
		public List<FunctionArgumentsContext> functionArguments() {
			return getRuleContexts(FunctionArgumentsContext.class);
		}
		public FunctionArgumentsContext functionArguments(int i) {
			return getRuleContext(FunctionArgumentsContext.class,i);
		}
		public TerminalNode Constructor() { return getToken(GameMakerLanguageParser.Constructor, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public TerminalNode Colon() { return getToken(GameMakerLanguageParser.Colon, 0); }
		public ConstructorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constructorDeclaration; }
	}

	public final ConstructorDeclarationContext constructorDeclaration() throws RecognitionException {
		ConstructorDeclarationContext _localctx = new ConstructorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_constructorDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(511);
			match(Function_);
			setState(513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Constructor || _la==Identifier) {
				{
				setState(512);
				identifier();
				}
			}

			setState(515);
			functionArguments();
			setState(520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Colon) {
				{
				setState(516);
				match(Colon);
				setState(517);
				identifier();
				setState(518);
				functionArguments();
				}
			}

			setState(522);
			match(Constructor);
			setState(523);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode Enum() { return getToken(GameMakerLanguageParser.Enum, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode OpenBrace() { return getToken(GameMakerLanguageParser.OpenBrace, 0); }
		public TerminalNode CloseBrace() { return getToken(GameMakerLanguageParser.CloseBrace, 0); }
		public EnumBodyContext enumBody() {
			return getRuleContext(EnumBodyContext.class,0);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(525);
			match(Enum);
			setState(526);
			identifier();
			setState(527);
			match(OpenBrace);
			setState(529);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Constructor || _la==Identifier) {
				{
				setState(528);
				enumBody();
				}
			}

			setState(531);
			match(CloseBrace);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumBodyContext extends ParserRuleContext {
		public List<VarDeclarationContext> varDeclaration() {
			return getRuleContexts(VarDeclarationContext.class);
		}
		public VarDeclarationContext varDeclaration(int i) {
			return getRuleContext(VarDeclarationContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GameMakerLanguageParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GameMakerLanguageParser.Comma, i);
		}
		public EnumBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumBody; }
	}

	public final EnumBodyContext enumBody() throws RecognitionException {
		EnumBodyContext _localctx = new EnumBodyContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_enumBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			varDeclaration();
			setState(538);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(534);
				match(Comma);
				setState(535);
				varDeclaration();
				}
				}
				setState(540);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroStatementContext extends ParserRuleContext {
		public TerminalNode Macro() { return getToken(GameMakerLanguageParser.Macro, 0); }
		public TerminalNode PpIdentifier() { return getToken(GameMakerLanguageParser.PpIdentifier, 0); }
		public MacroBodyContext macroBody() {
			return getRuleContext(MacroBodyContext.class,0);
		}
		public TerminalNode PpEnd() { return getToken(GameMakerLanguageParser.PpEnd, 0); }
		public MacroStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroStatement; }
	}

	public final MacroStatementContext macroStatement() throws RecognitionException {
		MacroStatementContext _localctx = new MacroStatementContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_macroStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			match(Macro);
			setState(542);
			match(PpIdentifier);
			setState(543);
			macroBody();
			setState(545);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,52,_ctx) ) {
			case 1:
				{
				setState(544);
				match(PpEnd);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MacroBodyContext extends ParserRuleContext {
		public List<TerminalNode> PpBodyCharacters() { return getTokens(GameMakerLanguageParser.PpBodyCharacters); }
		public TerminalNode PpBodyCharacters(int i) {
			return getToken(GameMakerLanguageParser.PpBodyCharacters, i);
		}
		public List<TerminalNode> PpNewLineEscaped() { return getTokens(GameMakerLanguageParser.PpNewLineEscaped); }
		public TerminalNode PpNewLineEscaped(int i) {
			return getToken(GameMakerLanguageParser.PpNewLineEscaped, i);
		}
		public MacroBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_macroBody; }
	}

	public final MacroBodyContext macroBody() throws RecognitionException {
		MacroBodyContext _localctx = new MacroBodyContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_macroBody);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(548); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(547);
					_la = _input.LA(1);
					if ( !(_la==PpBodyCharacters || _la==PpNewLineEscaped) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(550); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,53,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefineStatementContext extends ParserRuleContext {
		public TerminalNode Define() { return getToken(GameMakerLanguageParser.Define, 0); }
		public TerminalNode PpIdentifier() { return getToken(GameMakerLanguageParser.PpIdentifier, 0); }
		public TerminalNode PpEnd() { return getToken(GameMakerLanguageParser.PpEnd, 0); }
		public DefineStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_defineStatement; }
	}

	public final DefineStatementContext defineStatement() throws RecognitionException {
		DefineStatementContext _localctx = new DefineStatementContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_defineStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(552);
			match(Define);
			setState(553);
			match(PpIdentifier);
			setState(555);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
			case 1:
				{
				setState(554);
				match(PpEnd);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RegionStatementContext extends ParserRuleContext {
		public TerminalNode Region() { return getToken(GameMakerLanguageParser.Region, 0); }
		public TerminalNode EndRegion() { return getToken(GameMakerLanguageParser.EndRegion, 0); }
		public List<TerminalNode> PpBodyCharacters() { return getTokens(GameMakerLanguageParser.PpBodyCharacters); }
		public TerminalNode PpBodyCharacters(int i) {
			return getToken(GameMakerLanguageParser.PpBodyCharacters, i);
		}
		public TerminalNode PpEnd() { return getToken(GameMakerLanguageParser.PpEnd, 0); }
		public RegionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regionStatement; }
	}

	public final RegionStatementContext regionStatement() throws RecognitionException {
		RegionStatementContext _localctx = new RegionStatementContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_regionStatement);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(557);
			_la = _input.LA(1);
			if ( !(_la==Region || _la==EndRegion) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(561);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(558);
					match(PpBodyCharacters);
					}
					} 
				}
				setState(563);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
			}
			setState(565);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
			case 1:
				{
				setState(564);
				match(PpEnd);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode Break() { return getToken(GameMakerLanguageParser.Break, 0); }
		public TerminalNode Do() { return getToken(GameMakerLanguageParser.Do, 0); }
		public TerminalNode Case() { return getToken(GameMakerLanguageParser.Case, 0); }
		public TerminalNode Else() { return getToken(GameMakerLanguageParser.Else, 0); }
		public TerminalNode New() { return getToken(GameMakerLanguageParser.New, 0); }
		public TerminalNode Var() { return getToken(GameMakerLanguageParser.Var, 0); }
		public TerminalNode Catch() { return getToken(GameMakerLanguageParser.Catch, 0); }
		public TerminalNode Finally() { return getToken(GameMakerLanguageParser.Finally, 0); }
		public TerminalNode Return() { return getToken(GameMakerLanguageParser.Return, 0); }
		public TerminalNode Continue() { return getToken(GameMakerLanguageParser.Continue, 0); }
		public TerminalNode For() { return getToken(GameMakerLanguageParser.For, 0); }
		public TerminalNode Switch() { return getToken(GameMakerLanguageParser.Switch, 0); }
		public TerminalNode While() { return getToken(GameMakerLanguageParser.While, 0); }
		public TerminalNode Function_() { return getToken(GameMakerLanguageParser.Function_, 0); }
		public TerminalNode With() { return getToken(GameMakerLanguageParser.With, 0); }
		public TerminalNode Default() { return getToken(GameMakerLanguageParser.Default, 0); }
		public TerminalNode If() { return getToken(GameMakerLanguageParser.If, 0); }
		public TerminalNode Throw() { return getToken(GameMakerLanguageParser.Throw, 0); }
		public TerminalNode Delete() { return getToken(GameMakerLanguageParser.Delete, 0); }
		public TerminalNode Try() { return getToken(GameMakerLanguageParser.Try, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(567);
			_la = _input.LA(1);
			if ( !(((((_la - 62)) & ~0x3f) == 0 && ((1L << (_la - 62)) & ((1L << (Break - 62)) | (1L << (Do - 62)) | (1L << (Case - 62)) | (1L << (Else - 62)) | (1L << (New - 62)) | (1L << (Var - 62)) | (1L << (Catch - 62)) | (1L << (Finally - 62)) | (1L << (Return - 62)) | (1L << (Continue - 62)) | (1L << (For - 62)) | (1L << (Switch - 62)) | (1L << (While - 62)) | (1L << (Function_ - 62)) | (1L << (With - 62)) | (1L << (Default - 62)) | (1L << (If - 62)) | (1L << (Throw - 62)) | (1L << (Delete - 62)) | (1L << (Try - 62)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoftKeywordContext extends ParserRuleContext {
		public TerminalNode Constructor() { return getToken(GameMakerLanguageParser.Constructor, 0); }
		public SoftKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_softKeyword; }
	}

	public final SoftKeywordContext softKeyword() throws RecognitionException {
		SoftKeywordContext _localctx = new SoftKeywordContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_softKeyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(569);
			match(Constructor);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertySoftKeywordContext extends ParserRuleContext {
		public TerminalNode NoOneLiteral() { return getToken(GameMakerLanguageParser.NoOneLiteral, 0); }
		public PropertySoftKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertySoftKeyword; }
	}

	public final PropertySoftKeywordContext propertySoftKeyword() throws RecognitionException {
		PropertySoftKeywordContext _localctx = new PropertySoftKeywordContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_propertySoftKeyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(571);
			match(NoOneLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EosContext extends ParserRuleContext {
		public TerminalNode SemiColon() { return getToken(GameMakerLanguageParser.SemiColon, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_eos);
		try {
			setState(576);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(573);
				match(SemiColon);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(574);
				if (!(this.lineTerminatorAhead())) throw new FailedPredicateException(this, "this.lineTerminatorAhead()");
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(575);
				if (!(this.closeBrace())) throw new FailedPredicateException(this, "this.closeBrace()");
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 21:
			return assignableExpression_sempred((AssignableExpressionContext)_localctx, predIndex);
		case 23:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		case 49:
			return eos_sempred((EosContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean assignableExpression_sempred(AssignableExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		case 1:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 16);
		case 3:
			return precpred(_ctx, 15);
		case 4:
			return precpred(_ctx, 14);
		case 5:
			return precpred(_ctx, 13);
		case 6:
			return precpred(_ctx, 12);
		case 7:
			return precpred(_ctx, 11);
		case 8:
			return precpred(_ctx, 10);
		case 9:
			return precpred(_ctx, 9);
		case 10:
			return precpred(_ctx, 8);
		case 11:
			return precpred(_ctx, 7);
		case 12:
			return precpred(_ctx, 6);
		case 13:
			return precpred(_ctx, 5);
		case 14:
			return precpred(_ctx, 4);
		case 15:
			return precpred(_ctx, 28);
		case 16:
			return precpred(_ctx, 27);
		case 17:
			return precpred(_ctx, 22);
		}
		return true;
	}
	private boolean eos_sempred(EosContext _localctx, int predIndex) {
		switch (predIndex) {
		case 18:
			return this.lineTerminatorAhead();
		case 19:
			return this.closeBrace();
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3i\u0245\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\3\2\5\2"+
		"h\n\2\3\2\3\2\3\3\6\3m\n\3\r\3\16\3n\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\u0083\n\4\3\5\3\5\5\5\u0087"+
		"\n\5\3\5\3\5\3\6\3\6\3\6\5\6\u008e\n\6\3\6\3\6\3\6\5\6\u0093\n\6\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u00a3\n\7\3\7\3"+
		"\7\5\7\u00a7\n\7\3\7\3\7\5\7\u00ab\n\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u00b3"+
		"\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\16\3\16\5\16\u00ce\n\16\3\16\3\16\5\16"+
		"\u00d2\n\16\5\16\u00d4\n\16\3\16\3\16\3\17\6\17\u00d9\n\17\r\17\16\17"+
		"\u00da\3\20\3\20\3\20\3\20\5\20\u00e1\n\20\3\21\3\21\3\21\5\21\u00e6\n"+
		"\21\3\22\3\22\5\22\u00ea\n\22\3\22\3\22\3\23\3\23\3\23\3\23\7\23\u00f2"+
		"\n\23\f\23\16\23\u00f5\13\23\3\23\3\23\3\24\6\24\u00fa\n\24\r\24\16\24"+
		"\u00fb\3\24\5\24\u00ff\n\24\3\25\3\25\3\25\5\25\u0104\n\25\3\26\3\26\3"+
		"\26\3\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0110\n\27\3\27\3\27\3\27"+
		"\5\27\u0115\n\27\3\27\3\27\3\27\3\27\3\27\3\27\7\27\u011d\n\27\f\27\16"+
		"\27\u0120\13\27\3\30\3\30\3\30\7\30\u0125\n\30\f\30\16\30\u0128\13\30"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\5\31\u0148\n\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\3\31\3\31\3\31\5\31\u0177\n\31\3\31\3\31\3\31"+
		"\3\31\3\31\3\31\3\31\3\31\7\31\u0181\n\31\f\31\16\31\u0184\13\31\3\32"+
		"\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\34\3\34\7\34\u0190\n\34\f\34\16"+
		"\34\u0193\13\34\3\34\5\34\u0196\n\34\5\34\u0198\n\34\3\34\3\34\3\35\3"+
		"\35\3\36\3\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5"+
		"\37\u01ab\n\37\3 \3 \3 \3 \3!\7!\u01b2\n!\f!\16!\u01b5\13!\3!\5!\u01b8"+
		"\n!\3!\6!\u01bb\n!\r!\16!\u01bc\3!\7!\u01c0\n!\f!\16!\u01c3\13!\3!\7!"+
		"\u01c6\n!\f!\16!\u01c9\13!\3\"\3\"\3\"\3\"\7\"\u01cf\n\"\f\"\16\"\u01d2"+
		"\13\"\3\"\5\"\u01d5\n\"\5\"\u01d7\n\"\3\"\3\"\3#\3#\3#\3#\3#\3$\3$\3$"+
		"\3$\7$\u01e4\n$\f$\16$\u01e7\13$\3$\5$\u01ea\n$\5$\u01ec\n$\3$\3$\3%\3"+
		"%\3%\5%\u01f3\n%\3&\3&\3&\3&\3\'\3\'\3\'\5\'\u01fc\n\'\3(\3(\5(\u0200"+
		"\n(\3)\3)\5)\u0204\n)\3)\3)\3)\3)\3)\5)\u020b\n)\3)\3)\3)\3*\3*\3*\3*"+
		"\5*\u0214\n*\3*\3*\3+\3+\3+\7+\u021b\n+\f+\16+\u021e\13+\3,\3,\3,\3,\5"+
		",\u0224\n,\3-\6-\u0227\n-\r-\16-\u0228\3.\3.\3.\5.\u022e\n.\3/\3/\7/\u0232"+
		"\n/\f/\16/\u0235\13/\3/\5/\u0238\n/\3\60\3\60\3\61\3\61\3\62\3\62\3\63"+
		"\3\63\3\63\5\63\u0243\n\63\3\63\2\4,\60\64\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bd\2\f\3\2\26\31"+
		"\3\2\22\23\3\2\36\37\4\2\r\r$%\3\2 #\5\2\33\33((\668\5\2\r\r\35\35,\65"+
		"\3\2gh\3\2]^\6\2@@BMPSUW\2\u0283\2g\3\2\2\2\4l\3\2\2\2\6\u0082\3\2\2\2"+
		"\b\u0084\3\2\2\2\n\u008a\3\2\2\2\f\u00b2\3\2\2\2\16\u00b4\3\2\2\2\20\u00ba"+
		"\3\2\2\2\22\u00c0\3\2\2\2\24\u00c3\3\2\2\2\26\u00c6\3\2\2\2\30\u00c9\3"+
		"\2\2\2\32\u00cb\3\2\2\2\34\u00d8\3\2\2\2\36\u00dc\3\2\2\2 \u00e2\3\2\2"+
		"\2\"\u00e7\3\2\2\2$\u00ed\3\2\2\2&\u00fe\3\2\2\2(\u0100\3\2\2\2*\u0105"+
		"\3\2\2\2,\u010f\3\2\2\2.\u0121\3\2\2\2\60\u0147\3\2\2\2\62\u0185\3\2\2"+
		"\2\64\u0189\3\2\2\2\66\u018b\3\2\2\28\u019b\3\2\2\2:\u019d\3\2\2\2<\u01aa"+
		"\3\2\2\2>\u01ac\3\2\2\2@\u01b3\3\2\2\2B\u01ca\3\2\2\2D\u01da\3\2\2\2F"+
		"\u01df\3\2\2\2H\u01ef\3\2\2\2J\u01f4\3\2\2\2L\u01fb\3\2\2\2N\u01ff\3\2"+
		"\2\2P\u0201\3\2\2\2R\u020f\3\2\2\2T\u0217\3\2\2\2V\u021f\3\2\2\2X\u0226"+
		"\3\2\2\2Z\u022a\3\2\2\2\\\u022f\3\2\2\2^\u0239\3\2\2\2`\u023b\3\2\2\2"+
		"b\u023d\3\2\2\2d\u0242\3\2\2\2fh\5\4\3\2gf\3\2\2\2gh\3\2\2\2hi\3\2\2\2"+
		"ij\7\2\2\3j\3\3\2\2\2km\5\6\4\2lk\3\2\2\2mn\3\2\2\2nl\3\2\2\2no\3\2\2"+
		"\2o\5\3\2\2\2p\u0083\5\b\5\2q\u0083\5\30\r\2r\u0083\5V,\2s\u0083\5\f\7"+
		"\2t\u0083\5$\23\2u\u0083\5*\26\2v\u0083\5\n\6\2w\u0083\5\"\22\2x\u0083"+
		"\5\16\b\2y\u0083\5\22\n\2z\u0083\5\20\t\2{\u0083\5\24\13\2|\u0083\5\26"+
		"\f\2}\u0083\5P)\2~\u0083\5D#\2\177\u0083\5R*\2\u0080\u0083\5Z.\2\u0081"+
		"\u0083\5\\/\2\u0082p\3\2\2\2\u0082q\3\2\2\2\u0082r\3\2\2\2\u0082s\3\2"+
		"\2\2\u0082t\3\2\2\2\u0082u\3\2\2\2\u0082v\3\2\2\2\u0082w\3\2\2\2\u0082"+
		"x\3\2\2\2\u0082y\3\2\2\2\u0082z\3\2\2\2\u0082{\3\2\2\2\u0082|\3\2\2\2"+
		"\u0082}\3\2\2\2\u0082~\3\2\2\2\u0082\177\3\2\2\2\u0082\u0080\3\2\2\2\u0082"+
		"\u0081\3\2\2\2\u0083\7\3\2\2\2\u0084\u0086\7\t\2\2\u0085\u0087\5\4\3\2"+
		"\u0086\u0085\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0089"+
		"\7\n\2\2\u0089\t\3\2\2\2\u008a\u008b\7S\2\2\u008b\u008d\5\60\31\2\u008c"+
		"\u008e\7T\2\2\u008d\u008c\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u008f\3\2"+
		"\2\2\u008f\u0092\5\6\4\2\u0090\u0091\7D\2\2\u0091\u0093\5\6\4\2\u0092"+
		"\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093\13\3\2\2\2\u0094\u0095\7B\2\2"+
		"\u0095\u0096\5\6\4\2\u0096\u0097\7N\2\2\u0097\u0098\5\60\31\2\u0098\u0099"+
		"\5d\63\2\u0099\u00b3\3\2\2\2\u009a\u009b\7M\2\2\u009b\u009c\5\60\31\2"+
		"\u009c\u009d\5\6\4\2\u009d\u00b3\3\2\2\2\u009e\u009f\7K\2\2\u009f\u00a2"+
		"\7\7\2\2\u00a0\u00a3\5$\23\2\u00a1\u00a3\5*\26\2\u00a2\u00a0\3\2\2\2\u00a2"+
		"\u00a1\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a6\7\13"+
		"\2\2\u00a5\u00a7\5\60\31\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7"+
		"\u00a8\3\2\2\2\u00a8\u00aa\7\13\2\2\u00a9\u00ab\5\6\4\2\u00aa\u00a9\3"+
		"\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\7\b\2\2\u00ad"+
		"\u00b3\5\6\4\2\u00ae\u00af\7O\2\2\u00af\u00b0\5\60\31\2\u00b0\u00b1\5"+
		"\6\4\2\u00b1\u00b3\3\2\2\2\u00b2\u0094\3\2\2\2\u00b2\u009a\3\2\2\2\u00b2"+
		"\u009e\3\2\2\2\u00b2\u00ae\3\2\2\2\u00b3\r\3\2\2\2\u00b4\u00b5\7Q\2\2"+
		"\u00b5\u00b6\7\7\2\2\u00b6\u00b7\5\60\31\2\u00b7\u00b8\7\b\2\2\u00b8\u00b9"+
		"\5\6\4\2\u00b9\17\3\2\2\2\u00ba\u00bb\7L\2\2\u00bb\u00bc\7\7\2\2\u00bc"+
		"\u00bd\5\60\31\2\u00bd\u00be\7\b\2\2\u00be\u00bf\5\32\16\2\u00bf\21\3"+
		"\2\2\2\u00c0\u00c1\7J\2\2\u00c1\u00c2\5d\63\2\u00c2\23\3\2\2\2\u00c3\u00c4"+
		"\7@\2\2\u00c4\u00c5\5d\63\2\u00c5\25\3\2\2\2\u00c6\u00c7\7A\2\2\u00c7"+
		"\u00c8\5d\63\2\u00c8\27\3\2\2\2\u00c9\u00ca\7\13\2\2\u00ca\31\3\2\2\2"+
		"\u00cb\u00cd\7\t\2\2\u00cc\u00ce\5\34\17\2\u00cd\u00cc\3\2\2\2\u00cd\u00ce"+
		"\3\2\2\2\u00ce\u00d3\3\2\2\2\u00cf\u00d1\5 \21\2\u00d0\u00d2\5\34\17\2"+
		"\u00d1\u00d0\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d4\3\2\2\2\u00d3\u00cf"+
		"\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00d6\7\n\2\2\u00d6"+
		"\33\3\2\2\2\u00d7\u00d9\5\36\20\2\u00d8\u00d7\3\2\2\2\u00d9\u00da\3\2"+
		"\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db\35\3\2\2\2\u00dc\u00dd"+
		"\7C\2\2\u00dd\u00de\5.\30\2\u00de\u00e0\7\16\2\2\u00df\u00e1\5\4\3\2\u00e0"+
		"\u00df\3\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\37\3\2\2\2\u00e2\u00e3\7R\2\2"+
		"\u00e3\u00e5\7\16\2\2\u00e4\u00e6\5\4\3\2\u00e5\u00e4\3\2\2\2\u00e5\u00e6"+
		"\3\2\2\2\u00e6!\3\2\2\2\u00e7\u00e9\7I\2\2\u00e8\u00ea\5\60\31\2\u00e9"+
		"\u00e8\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb\u00ec\5d"+
		"\63\2\u00ec#\3\2\2\2\u00ed\u00ee\5&\24\2\u00ee\u00f3\5(\25\2\u00ef\u00f0"+
		"\7\f\2\2\u00f0\u00f2\5(\25\2\u00f1\u00ef\3\2\2\2\u00f2\u00f5\3\2\2\2\u00f3"+
		"\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f6\3\2\2\2\u00f5\u00f3\3\2"+
		"\2\2\u00f6\u00f7\5d\63\2\u00f7%\3\2\2\2\u00f8\u00fa\7F\2\2\u00f9\u00f8"+
		"\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc"+
		"\u00ff\3\2\2\2\u00fd\u00ff\7Z\2\2\u00fe\u00f9\3\2\2\2\u00fe\u00fd\3\2"+
		"\2\2\u00ff\'\3\2\2\2\u0100\u0103\5N(\2\u0101\u0102\7\r\2\2\u0102\u0104"+
		"\5\60\31\2\u0103\u0101\3\2\2\2\u0103\u0104\3\2\2\2\u0104)\3\2\2\2\u0105"+
		"\u0106\5,\27\2\u0106\u0107\5:\36\2\u0107\u0108\5\60\31\2\u0108+\3\2\2"+
		"\2\u0109\u010a\b\27\1\2\u010a\u0110\5N(\2\u010b\u010c\7\7\2\2\u010c\u010d"+
		"\5,\27\2\u010d\u010e\7\b\2\2\u010e\u0110\3\2\2\2\u010f\u0109\3\2\2\2\u010f"+
		"\u010b\3\2\2\2\u0110\u011e\3\2\2\2\u0111\u0112\f\6\2\2\u0112\u0114\7\5"+
		"\2\2\u0113\u0115\5\64\33\2\u0114\u0113\3\2\2\2\u0114\u0115\3\2\2\2\u0115"+
		"\u0116\3\2\2\2\u0116\u0117\5.\30\2\u0117\u0118\7\6\2\2\u0118\u011d\3\2"+
		"\2\2\u0119\u011a\f\5\2\2\u011a\u011b\7\17\2\2\u011b\u011d\5N(\2\u011c"+
		"\u0111\3\2\2\2\u011c\u0119\3\2\2\2\u011d\u0120\3\2\2\2\u011e\u011c\3\2"+
		"\2\2\u011e\u011f\3\2\2\2\u011f-\3\2\2\2\u0120\u011e\3\2\2\2\u0121\u0126"+
		"\5\60\31\2\u0122\u0123\7\f\2\2\u0123\u0125\5\60\31\2\u0124\u0122\3\2\2"+
		"\2\u0125\u0128\3\2\2\2\u0126\u0124\3\2\2\2\u0126\u0127\3\2\2\2\u0127/"+
		"\3\2\2\2\u0128\u0126\3\2\2\2\u0129\u012a\b\31\1\2\u012a\u0148\5\62\32"+
		"\2\u012b\u012c\7E\2\2\u012c\u012d\5N(\2\u012d\u012e\5\66\34\2\u012e\u0148"+
		"\3\2\2\2\u012f\u0130\7V\2\2\u0130\u0148\5\60\31\33\u0131\u0132\5,\27\2"+
		"\u0132\u0133\7\20\2\2\u0133\u0148\3\2\2\2\u0134\u0135\5,\27\2\u0135\u0136"+
		"\7\21\2\2\u0136\u0148\3\2\2\2\u0137\u0138\7\20\2\2\u0138\u0148\5,\27\2"+
		"\u0139\u013a\7\21\2\2\u013a\u0148\5,\27\2\u013b\u013c\7\23\2\2\u013c\u0148"+
		"\5\60\31\25\u013d\u013e\7\24\2\2\u013e\u0148\5\60\31\24\u013f\u0140\7"+
		"\25\2\2\u0140\u0148\5\60\31\23\u0141\u0148\5N(\2\u0142\u0148\5<\37\2\u0143"+
		"\u0144\7\7\2\2\u0144\u0145\5\60\31\2\u0145\u0146\7\b\2\2\u0146\u0148\3"+
		"\2\2\2\u0147\u0129\3\2\2\2\u0147\u012b\3\2\2\2\u0147\u012f\3\2\2\2\u0147"+
		"\u0131\3\2\2\2\u0147\u0134\3\2\2\2\u0147\u0137\3\2\2\2\u0147\u0139\3\2"+
		"\2\2\u0147\u013b\3\2\2\2\u0147\u013d\3\2\2\2\u0147\u013f\3\2\2\2\u0147"+
		"\u0141\3\2\2\2\u0147\u0142\3\2\2\2\u0147\u0143\3\2\2\2\u0148\u0182\3\2"+
		"\2\2\u0149\u014a\f\22\2\2\u014a\u014b\t\2\2\2\u014b\u0181\5\60\31\23\u014c"+
		"\u014d\f\21\2\2\u014d\u014e\t\3\2\2\u014e\u0181\5\60\31\22\u014f\u0150"+
		"\f\20\2\2\u0150\u0151\7\34\2\2\u0151\u0181\5\60\31\21\u0152\u0153\f\17"+
		"\2\2\u0153\u0154\t\4\2\2\u0154\u0181\5\60\31\20\u0155\u0156\f\16\2\2\u0156"+
		"\u0157\7*\2\2\u0157\u0181\5\60\31\17\u0158\u0159\f\r\2\2\u0159\u015a\7"+
		")\2\2\u015a\u0181\5\60\31\16\u015b\u015c\f\f\2\2\u015c\u015d\7+\2\2\u015d"+
		"\u0181\5\60\31\r\u015e\u015f\f\13\2\2\u015f\u0160\t\5\2\2\u0160\u0181"+
		"\5\60\31\f\u0161\u0162\f\n\2\2\u0162\u0163\t\6\2\2\u0163\u0181\5\60\31"+
		"\13\u0164\u0165\f\t\2\2\u0165\u0166\7&\2\2\u0166\u0181\5\60\31\n\u0167"+
		"\u0168\f\b\2\2\u0168\u0169\7(\2\2\u0169\u0181\5\60\31\t\u016a\u016b\f"+
		"\7\2\2\u016b\u016c\7\'\2\2\u016c\u0181\5\60\31\b\u016d\u016e\f\6\2\2\u016e"+
		"\u016f\7\33\2\2\u016f\u0170\5\60\31\2\u0170\u0171\7\16\2\2\u0171\u0172"+
		"\5\60\31\7\u0172\u0181\3\2\2\2\u0173\u0174\f\36\2\2\u0174\u0176\7\5\2"+
		"\2\u0175\u0177\5\64\33\2\u0176\u0175\3\2\2\2\u0176\u0177\3\2\2\2\u0177"+
		"\u0178\3\2\2\2\u0178\u0179\5.\30\2\u0179\u017a\7\6\2\2\u017a\u0181\3\2"+
		"\2\2\u017b\u017c\f\35\2\2\u017c\u017d\7\17\2\2\u017d\u0181\5N(\2\u017e"+
		"\u017f\f\30\2\2\u017f\u0181\5\66\34\2\u0180\u0149\3\2\2\2\u0180\u014c"+
		"\3\2\2\2\u0180\u014f\3\2\2\2\u0180\u0152\3\2\2\2\u0180\u0155\3\2\2\2\u0180"+
		"\u0158\3\2\2\2\u0180\u015b\3\2\2\2\u0180\u015e\3\2\2\2\u0180\u0161\3\2"+
		"\2\2\u0180\u0164\3\2\2\2\u0180\u0167\3\2\2\2\u0180\u016a\3\2\2\2\u0180"+
		"\u016d\3\2\2\2\u0180\u0173\3\2\2\2\u0180\u017b\3\2\2\2\u0180\u017e\3\2"+
		"\2\2\u0181\u0184\3\2\2\2\u0182\u0180\3\2\2\2\u0182\u0183\3\2\2\2\u0183"+
		"\61\3\2\2\2\u0184\u0182\3\2\2\2\u0185\u0186\7P\2\2\u0186\u0187\5\66\34"+
		"\2\u0187\u0188\5\6\4\2\u0188\63\3\2\2\2\u0189\u018a\t\7\2\2\u018a\65\3"+
		"\2\2\2\u018b\u0197\7\7\2\2\u018c\u0191\58\35\2\u018d\u018e\7\f\2\2\u018e"+
		"\u0190\58\35\2\u018f\u018d\3\2\2\2\u0190\u0193\3\2\2\2\u0191\u018f\3\2"+
		"\2\2\u0191\u0192\3\2\2\2\u0192\u0195\3\2\2\2\u0193\u0191\3\2\2\2\u0194"+
		"\u0196\7\f\2\2\u0195\u0194\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0198\3\2"+
		"\2\2\u0197\u018c\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u0199\3\2\2\2\u0199"+
		"\u019a\7\b\2\2\u019a\67\3\2\2\2\u019b\u019c\5\60\31\2\u019c9\3\2\2\2\u019d"+
		"\u019e\t\b\2\2\u019e;\3\2\2\2\u019f\u01ab\79\2\2\u01a0\u01ab\7:\2\2\u01a1"+
		"\u01ab\7;\2\2\u01a2\u01ab\7`\2\2\u01a3\u01ab\7a\2\2\u01a4\u01ab\7?\2\2"+
		"\u01a5\u01ab\7>\2\2\u01a6\u01ab\7=\2\2\u01a7\u01ab\7<\2\2\u01a8\u01ab"+
		"\5> \2\u01a9\u01ab\5B\"\2\u01aa\u019f\3\2\2\2\u01aa\u01a0\3\2\2\2\u01aa"+
		"\u01a1\3\2\2\2\u01aa\u01a2\3\2\2\2\u01aa\u01a3\3\2\2\2\u01aa\u01a4\3\2"+
		"\2\2\u01aa\u01a5\3\2\2\2\u01aa\u01a6\3\2\2\2\u01aa\u01a7\3\2\2\2\u01aa"+
		"\u01a8\3\2\2\2\u01aa\u01a9\3\2\2\2\u01ab=\3\2\2\2\u01ac\u01ad\7\5\2\2"+
		"\u01ad\u01ae\5@!\2\u01ae\u01af\7\6\2\2\u01af?\3\2\2\2\u01b0\u01b2\7\f"+
		"\2\2\u01b1\u01b0\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3\u01b1\3\2\2\2\u01b3"+
		"\u01b4\3\2\2\2\u01b4\u01b7\3\2\2\2\u01b5\u01b3\3\2\2\2\u01b6\u01b8\5\60"+
		"\31\2\u01b7\u01b6\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u01c1\3\2\2\2\u01b9"+
		"\u01bb\7\f\2\2\u01ba\u01b9\3\2\2\2\u01bb\u01bc\3\2\2\2\u01bc\u01ba\3\2"+
		"\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01be\3\2\2\2\u01be\u01c0\5\60\31\2\u01bf"+
		"\u01ba\3\2\2\2\u01c0\u01c3\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c2\3\2"+
		"\2\2\u01c2\u01c7\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c4\u01c6\7\f\2\2\u01c5"+
		"\u01c4\3\2\2\2\u01c6\u01c9\3\2\2\2\u01c7\u01c5\3\2\2\2\u01c7\u01c8\3\2"+
		"\2\2\u01c8A\3\2\2\2\u01c9\u01c7\3\2\2\2\u01ca\u01d6\7\t\2\2\u01cb\u01d0"+
		"\5J&\2\u01cc\u01cd\7\f\2\2\u01cd\u01cf\5J&\2\u01ce\u01cc\3\2\2\2\u01cf"+
		"\u01d2\3\2\2\2\u01d0\u01ce\3\2\2\2\u01d0\u01d1\3\2\2\2\u01d1\u01d4\3\2"+
		"\2\2\u01d2\u01d0\3\2\2\2\u01d3\u01d5\7\f\2\2\u01d4\u01d3\3\2\2\2\u01d4"+
		"\u01d5\3\2\2\2\u01d5\u01d7\3\2\2\2\u01d6\u01cb\3\2\2\2\u01d6\u01d7\3\2"+
		"\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01d9\7\n\2\2\u01d9C\3\2\2\2\u01da\u01db"+
		"\7P\2\2\u01db\u01dc\5N(\2\u01dc\u01dd\5F$\2\u01dd\u01de\5\6\4\2\u01de"+
		"E\3\2\2\2\u01df\u01eb\7\7\2\2\u01e0\u01e5\5H%\2\u01e1\u01e2\7\f\2\2\u01e2"+
		"\u01e4\5H%\2\u01e3\u01e1\3\2\2\2\u01e4\u01e7\3\2\2\2\u01e5\u01e3\3\2\2"+
		"\2\u01e5\u01e6\3\2\2\2\u01e6\u01e9\3\2\2\2\u01e7\u01e5\3\2\2\2\u01e8\u01ea"+
		"\7\f\2\2\u01e9\u01e8\3\2\2\2\u01e9\u01ea\3\2\2\2\u01ea\u01ec\3\2\2\2\u01eb"+
		"\u01e0\3\2\2\2\u01eb\u01ec\3\2\2\2\u01ec\u01ed\3\2\2\2\u01ed\u01ee\7\b"+
		"\2\2\u01eeG\3\2\2\2\u01ef\u01f2\5N(\2\u01f0\u01f1\7\r\2\2\u01f1\u01f3"+
		"\5\60\31\2\u01f2\u01f0\3\2\2\2\u01f2\u01f3\3\2\2\2\u01f3I\3\2\2\2\u01f4"+
		"\u01f5\5L\'\2\u01f5\u01f6\7\16\2\2\u01f6\u01f7\5\60\31\2\u01f7K\3\2\2"+
		"\2\u01f8\u01fc\7_\2\2\u01f9\u01fc\5`\61\2\u01fa\u01fc\5b\62\2\u01fb\u01f8"+
		"\3\2\2\2\u01fb\u01f9\3\2\2\2\u01fb\u01fa\3\2\2\2\u01fcM\3\2\2\2\u01fd"+
		"\u0200\7_\2\2\u01fe\u0200\5`\61\2\u01ff\u01fd\3\2\2\2\u01ff\u01fe\3\2"+
		"\2\2\u0200O\3\2\2\2\u0201\u0203\7P\2\2\u0202\u0204\5N(\2\u0203\u0202\3"+
		"\2\2\2\u0203\u0204\3\2\2\2\u0204\u0205\3\2\2\2\u0205\u020a\5F$\2\u0206"+
		"\u0207\7\16\2\2\u0207\u0208\5N(\2\u0208\u0209\5F$\2\u0209\u020b\3\2\2"+
		"\2\u020a\u0206\3\2\2\2\u020a\u020b\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020d"+
		"\7Y\2\2\u020d\u020e\5\6\4\2\u020eQ\3\2\2\2\u020f\u0210\7X\2\2\u0210\u0211"+
		"\5N(\2\u0211\u0213\7\t\2\2\u0212\u0214\5T+\2\u0213\u0212\3\2\2\2\u0213"+
		"\u0214\3\2\2\2\u0214\u0215\3\2\2\2\u0215\u0216\7\n\2\2\u0216S\3\2\2\2"+
		"\u0217\u021c\5(\25\2\u0218\u0219\7\f\2\2\u0219\u021b\5(\25\2\u021a\u0218"+
		"\3\2\2\2\u021b\u021e\3\2\2\2\u021c\u021a\3\2\2\2\u021c\u021d\3\2\2\2\u021d"+
		"U\3\2\2\2\u021e\u021c\3\2\2\2\u021f\u0220\7[\2\2\u0220\u0221\7e\2\2\u0221"+
		"\u0223\5X-\2\u0222\u0224\7i\2\2\u0223\u0222\3\2\2\2\u0223\u0224\3\2\2"+
		"\2\u0224W\3\2\2\2\u0225\u0227\t\t\2\2\u0226\u0225\3\2\2\2\u0227\u0228"+
		"\3\2\2\2\u0228\u0226\3\2\2\2\u0228\u0229\3\2\2\2\u0229Y\3\2\2\2\u022a"+
		"\u022b\7\\\2\2\u022b\u022d\7e\2\2\u022c\u022e\7i\2\2\u022d\u022c\3\2\2"+
		"\2\u022d\u022e\3\2\2\2\u022e[\3\2\2\2\u022f\u0233\t\n\2\2\u0230\u0232"+
		"\7g\2\2\u0231\u0230\3\2\2\2\u0232\u0235\3\2\2\2\u0233\u0231\3\2\2\2\u0233"+
		"\u0234\3\2\2\2\u0234\u0237\3\2\2\2\u0235\u0233\3\2\2\2\u0236\u0238\7i"+
		"\2\2\u0237\u0236\3\2\2\2\u0237\u0238\3\2\2\2\u0238]\3\2\2\2\u0239\u023a"+
		"\t\13\2\2\u023a_\3\2\2\2\u023b\u023c\7Y\2\2\u023ca\3\2\2\2\u023d\u023e"+
		"\7:\2\2\u023ec\3\2\2\2\u023f\u0243\7\13\2\2\u0240\u0243\6\63\24\2\u0241"+
		"\u0243\6\63\25\2\u0242\u023f\3\2\2\2\u0242\u0240\3\2\2\2\u0242\u0241\3"+
		"\2\2\2\u0243e\3\2\2\2<gn\u0082\u0086\u008d\u0092\u00a2\u00a6\u00aa\u00b2"+
		"\u00cd\u00d1\u00d3\u00da\u00e0\u00e5\u00e9\u00f3\u00fb\u00fe\u0103\u010f"+
		"\u0114\u011c\u011e\u0126\u0147\u0176\u0180\u0182\u0191\u0195\u0197\u01aa"+
		"\u01b3\u01b7\u01bc\u01c1\u01c7\u01d0\u01d4\u01d6\u01e5\u01e9\u01eb\u01f2"+
		"\u01fb\u01ff\u0203\u020a\u0213\u021c\u0223\u0228\u022d\u0233\u0237\u0242";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}