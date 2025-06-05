// Generated from MiniJS.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJSListener from './MiniJSListener.js';
const serializedATN = [4,1,15,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,33,8,2,10,2,12,2,36,9,2,1,2,3,2,39,8,2,1,2,
1,2,1,3,1,3,1,3,1,3,5,3,47,8,3,10,3,12,3,50,9,3,1,4,1,4,1,4,5,4,55,8,4,10,
4,12,4,58,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,
0,8,0,2,4,6,8,10,12,14,0,1,2,0,12,12,14,14,71,0,17,1,0,0,0,2,24,1,0,0,0,
4,26,1,0,0,0,6,42,1,0,0,0,8,51,1,0,0,0,10,59,1,0,0,0,12,64,1,0,0,0,14,70,
1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,
0,0,0,20,1,1,0,0,0,21,25,3,4,2,0,22,25,3,10,5,0,23,25,3,12,6,0,24,21,1,0,
0,0,24,22,1,0,0,0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,5,2,0,0,
28,29,5,13,0,0,29,30,5,3,0,0,30,34,5,4,0,0,31,33,3,6,3,0,32,31,1,0,0,0,33,
36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,37,39,
3,8,4,0,38,37,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,5,0,0,41,5,1,0,
0,0,42,43,5,6,0,0,43,44,3,14,7,0,44,48,5,7,0,0,45,47,3,2,1,0,46,45,1,0,0,
0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,7,1,0,0,0,50,48,1,0,0,0,51,
52,5,8,0,0,52,56,5,7,0,0,53,55,3,2,1,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,
1,0,0,0,56,57,1,0,0,0,57,9,1,0,0,0,58,56,1,0,0,0,59,60,5,13,0,0,60,61,5,
9,0,0,61,62,3,14,7,0,62,63,5,10,0,0,63,11,1,0,0,0,64,65,5,11,0,0,65,66,5,
2,0,0,66,67,5,12,0,0,67,68,5,3,0,0,68,69,5,10,0,0,69,13,1,0,0,0,70,71,7,
0,0,0,71,15,1,0,0,0,6,19,24,34,38,48,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJSParser extends antlr4.Parser {

    static grammarFileName = "MiniJS.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'='", "';'", 
                            "'output'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "TEXTLITERAL", "IDENTIFIER", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "switchStatement", 
                         "caseSection", "defaultSection", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJSParser.ruleNames;
        this.literalNames = MiniJSParser.literalNames;
        this.symbolicNames = MiniJSParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJSParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.simpleStatement();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 10242) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJSParser.RULE_simpleStatement);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.switchStatement();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.assignmentStatement();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJSParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(MiniJSParser.T__0);
	        this.state = 27;
	        this.match(MiniJSParser.T__1);
	        this.state = 28;
	        this.match(MiniJSParser.IDENTIFIER);
	        this.state = 29;
	        this.match(MiniJSParser.T__2);
	        this.state = 30;
	        this.match(MiniJSParser.T__3);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 31;
	            this.caseSection();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 37;
	            this.defaultSection();
	        }

	        this.state = 40;
	        this.match(MiniJSParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseSection() {
	    let localctx = new CaseSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJSParser.RULE_caseSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MiniJSParser.T__5);
	        this.state = 43;
	        this.constant();
	        this.state = 44;
	        this.match(MiniJSParser.T__6);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 10242) !== 0)) {
	            this.state = 45;
	            this.simpleStatement();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultSection() {
	    let localctx = new DefaultSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJSParser.RULE_defaultSection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(MiniJSParser.T__7);
	        this.state = 52;
	        this.match(MiniJSParser.T__6);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 10242) !== 0)) {
	            this.state = 53;
	            this.simpleStatement();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiniJSParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(MiniJSParser.IDENTIFIER);
	        this.state = 60;
	        this.match(MiniJSParser.T__8);
	        this.state = 61;
	        this.constant();
	        this.state = 62;
	        this.match(MiniJSParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiniJSParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(MiniJSParser.T__10);
	        this.state = 65;
	        this.match(MiniJSParser.T__1);
	        this.state = 66;
	        this.match(MiniJSParser.TEXTLITERAL);
	        this.state = 67;
	        this.match(MiniJSParser.T__2);
	        this.state = 68;
	        this.match(MiniJSParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiniJSParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiniJSParser.EOF = antlr4.Token.EOF;
MiniJSParser.T__0 = 1;
MiniJSParser.T__1 = 2;
MiniJSParser.T__2 = 3;
MiniJSParser.T__3 = 4;
MiniJSParser.T__4 = 5;
MiniJSParser.T__5 = 6;
MiniJSParser.T__6 = 7;
MiniJSParser.T__7 = 8;
MiniJSParser.T__8 = 9;
MiniJSParser.T__9 = 10;
MiniJSParser.T__10 = 11;
MiniJSParser.TEXTLITERAL = 12;
MiniJSParser.IDENTIFIER = 13;
MiniJSParser.NUMBER = 14;
MiniJSParser.WS = 15;

MiniJSParser.RULE_program = 0;
MiniJSParser.RULE_simpleStatement = 1;
MiniJSParser.RULE_switchStatement = 2;
MiniJSParser.RULE_caseSection = 3;
MiniJSParser.RULE_defaultSection = 4;
MiniJSParser.RULE_assignmentStatement = 5;
MiniJSParser.RULE_outputStatement = 6;
MiniJSParser.RULE_constant = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_program;
    }

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitProgram(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_simpleStatement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_switchStatement;
    }

	IDENTIFIER() {
	    return this.getToken(MiniJSParser.IDENTIFIER, 0);
	};

	caseSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseSectionContext);
	    } else {
	        return this.getTypedRuleContext(CaseSectionContext,i);
	    }
	};

	defaultSection() {
	    return this.getTypedRuleContext(DefaultSectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitSwitchStatement(this);
		}
	}


}



class CaseSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_caseSection;
    }

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterCaseSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitCaseSection(this);
		}
	}


}



class DefaultSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_defaultSection;
    }

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterDefaultSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitDefaultSection(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_assignmentStatement;
    }

	IDENTIFIER() {
	    return this.getToken(MiniJSParser.IDENTIFIER, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_outputStatement;
    }

	TEXTLITERAL() {
	    return this.getToken(MiniJSParser.TEXTLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitOutputStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJSParser.RULE_constant;
    }

	NUMBER() {
	    return this.getToken(MiniJSParser.NUMBER, 0);
	};

	TEXTLITERAL() {
	    return this.getToken(MiniJSParser.TEXTLITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJSListener ) {
	        listener.exitConstant(this);
		}
	}


}




MiniJSParser.ProgramContext = ProgramContext; 
MiniJSParser.SimpleStatementContext = SimpleStatementContext; 
MiniJSParser.SwitchStatementContext = SwitchStatementContext; 
MiniJSParser.CaseSectionContext = CaseSectionContext; 
MiniJSParser.DefaultSectionContext = DefaultSectionContext; 
MiniJSParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJSParser.OutputStatementContext = OutputStatementContext; 
MiniJSParser.ConstantContext = ConstantContext; 
