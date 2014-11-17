// Do not edit this file; automatically generated by build.py.
"use strict";

Blockly.Msg.DUPLICATE_BLOCK="Duplicate";Blockly.Msg.REMOVE_COMMENT="Remove Comment";Blockly.Msg.ADD_COMMENT="Add Comment";Blockly.Msg.EXTERNAL_INPUTS="External Inputs";Blockly.Msg.INLINE_INPUTS="Inline Inputs";Blockly.Msg.DELETE_BLOCK="Delete Block";Blockly.Msg.DELETE_X_BLOCKS="Delete %1 Blocks";Blockly.Msg.COLLAPSE_BLOCK="Collapse Block";Blockly.Msg.EXPAND_BLOCK="Expand Block";Blockly.Msg.DISABLE_BLOCK="Disable Block";Blockly.Msg.ENABLE_BLOCK="Enable Block";Blockly.Msg.HELP="Help";
Blockly.Msg.COLLAPSE_ALL="Collapse Blocks";Blockly.Msg.EXPAND_ALL="Expand Blocks";Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.RESERVED_WORDS_||(Blockly.Arduino.RESERVED_WORDS_="");Blockly.Arduino.RESERVED_WORDS_+="setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts";
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;var profile={arduino:{description:"Arduino standard-compatible board",digital:[["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],serial:9600},arduino_mega:{description:"Arduino Mega-compatible board"}};
profile["default"]=profile.arduino;Blockly.Arduino.init=function(){Blockly.Arduino.definitions_={};Blockly.Arduino.setups_={};Blockly.Variables&&(Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_))};
Blockly.Arduino.finish=function(a){a="  "+a.replace(/\n/g,"\n  ");a=a.replace(/\n\s+$/,"\n");a="void loop() \n{\n"+a+"\n}";var e=[],d=[],b;for(b in Blockly.Arduino.definitions_){var c=Blockly.Arduino.definitions_[b];c.match(/^#include/)?e.push(c):d.push(c)}c=[];for(b in Blockly.Arduino.setups_)c.push(Blockly.Arduino.setups_[b]);a=(e.join("\n")+"\n\n"+d.join("\n")+"\nvoid setup() \n{\n  "+c.join("\n  ")+"\n}\n\n").replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a;a=a.replace(/&quot;/g,'"');a=a.replace(/quot;/g,
'"');a=a.replace(/&amp;/g,"");a=a.replace(/amp;/g,"");a=a.replace(/&lt;/g,"<");a=a.replace(/lt;/g,"<");a=a.replace(/&gt;/g,">");return a=a.replace(/gt;/g,">")};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,e){if(null===e)return"";var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){var b=a.getCommentText();b&&(d+=Blockly.Generator.prefixLines(b,"// ")+"\n");for(var c=0;c<a.inputList.length;c++)a.inputList[c].type==Blockly.INPUT_VALUE&&a.inputList[c].connection.targetBlock()&&b&&(d+=Blockly.Generator.prefixLines(b,"// "))}b=a.nextConnection&&a.nextConnection.targetBlock();b=this.blockToCode(b);return d+e+b};