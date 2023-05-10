// Generated from GameMakerLanguageParser.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import GameMakerLanguageParserVisitor from './GameMakerLanguageParserVisitor.js';

const serializedATN = [4,1,109,665,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,1,0,3,0,126,8,0,1,
0,1,0,1,1,4,1,131,8,1,11,1,12,1,132,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,158,8,2,1,2,
3,2,161,8,2,1,3,1,3,3,3,165,8,3,1,3,1,3,1,4,1,4,1,4,3,4,172,8,4,1,4,1,4,
1,4,3,4,177,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,
192,8,5,1,5,1,5,3,5,196,8,5,1,5,1,5,3,5,200,8,5,1,5,1,5,1,5,1,5,1,5,1,5,
3,5,208,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,
1,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,232,8,12,1,12,1,12,3,12,236,8,12,
3,12,238,8,12,1,12,1,12,1,13,4,13,243,8,13,11,13,12,13,244,1,14,1,14,1,14,
1,14,3,14,251,8,14,1,15,1,15,1,15,3,15,256,8,15,1,16,1,16,1,16,1,17,1,17,
1,17,1,17,3,17,265,8,17,1,17,3,17,268,8,17,1,18,1,18,1,18,3,18,273,8,18,
1,18,3,18,276,8,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,3,20,285,8,20,1,21,
1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,5,23,298,8,23,10,23,12,
23,301,9,23,1,24,4,24,304,8,24,11,24,12,24,305,1,24,3,24,309,8,24,1,25,1,
25,1,25,3,25,314,8,25,1,26,1,26,1,26,1,26,5,26,320,8,26,10,26,12,26,323,
9,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,3,27,333,8,27,1,27,1,27,1,27,
1,27,1,27,1,27,5,27,341,8,27,10,27,12,27,344,9,27,1,28,1,28,1,28,5,28,349,
8,28,10,28,12,28,352,9,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,3,29,380,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,430,8,29,1,29,1,29,1,29,
1,29,1,29,5,29,437,8,29,10,29,12,29,440,9,29,1,30,1,30,1,30,1,31,1,31,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,455,8,31,1,32,1,32,1,33,1,33,
1,33,1,33,5,33,463,8,33,10,33,12,33,466,9,33,1,33,3,33,469,8,33,3,33,471,
8,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,
36,1,36,1,36,1,36,1,36,3,36,491,8,36,1,37,1,37,5,37,495,8,37,10,37,12,37,
498,9,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,3,38,507,8,38,1,39,1,39,1,39,
1,39,1,40,5,40,514,8,40,10,40,12,40,517,9,40,1,40,3,40,520,8,40,1,40,4,40,
523,8,40,11,40,12,40,524,1,40,5,40,528,8,40,10,40,12,40,531,9,40,1,40,5,
40,534,8,40,10,40,12,40,537,9,40,1,41,1,41,1,41,1,41,5,41,543,8,41,10,41,
12,41,546,9,41,1,41,3,41,549,8,41,3,41,551,8,41,1,41,1,41,1,42,1,42,1,42,
1,42,1,42,1,43,1,43,3,43,562,8,43,1,43,1,43,1,43,1,43,1,43,3,43,569,8,43,
1,43,1,43,1,43,1,44,1,44,1,44,1,44,5,44,578,8,44,10,44,12,44,581,9,44,1,
44,3,44,584,8,44,3,44,586,8,44,1,44,1,44,1,45,1,45,1,45,3,45,593,8,45,1,
46,1,46,1,46,1,46,1,47,1,47,1,47,3,47,602,8,47,1,48,1,48,3,48,606,8,48,1,
49,1,49,1,49,1,49,3,49,612,8,49,1,49,3,49,615,8,49,1,49,1,49,1,50,1,50,1,
50,5,50,622,8,50,10,50,12,50,625,9,50,1,51,1,51,1,51,3,51,630,8,51,1,52,
1,52,1,52,4,52,635,8,52,11,52,12,52,636,1,52,1,52,1,53,1,53,1,53,1,53,1,
54,1,54,3,54,647,8,54,1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,
1,59,1,59,1,60,1,60,1,61,1,61,1,61,0,2,54,58,62,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
112,114,116,118,120,122,0,14,1,0,17,18,1,0,23,26,1,0,19,20,1,0,31,32,2,0,
14,14,37,38,1,0,33,36,3,0,28,28,41,41,55,57,3,0,14,14,30,30,45,54,1,1,103,
103,1,1,106,106,1,0,96,97,2,0,7,7,10,10,2,0,9,9,11,11,4,0,3,92,94,94,98,
101,107,109,725,0,125,1,0,0,0,2,130,1,0,0,0,4,157,1,0,0,0,6,162,1,0,0,0,
8,168,1,0,0,0,10,207,1,0,0,0,12,209,1,0,0,0,14,215,1,0,0,0,16,221,1,0,0,
0,18,223,1,0,0,0,20,225,1,0,0,0,22,227,1,0,0,0,24,229,1,0,0,0,26,242,1,0,
0,0,28,246,1,0,0,0,30,252,1,0,0,0,32,257,1,0,0,0,34,260,1,0,0,0,36,269,1,
0,0,0,38,279,1,0,0,0,40,282,1,0,0,0,42,286,1,0,0,0,44,289,1,0,0,0,46,293,
1,0,0,0,48,308,1,0,0,0,50,310,1,0,0,0,52,315,1,0,0,0,54,326,1,0,0,0,56,345,
1,0,0,0,58,379,1,0,0,0,60,441,1,0,0,0,62,454,1,0,0,0,64,456,1,0,0,0,66,458,
1,0,0,0,68,474,1,0,0,0,70,476,1,0,0,0,72,490,1,0,0,0,74,492,1,0,0,0,76,506,
1,0,0,0,78,508,1,0,0,0,80,515,1,0,0,0,82,538,1,0,0,0,84,554,1,0,0,0,86,559,
1,0,0,0,88,573,1,0,0,0,90,589,1,0,0,0,92,594,1,0,0,0,94,601,1,0,0,0,96,605,
1,0,0,0,98,607,1,0,0,0,100,618,1,0,0,0,102,626,1,0,0,0,104,631,1,0,0,0,106,
640,1,0,0,0,108,644,1,0,0,0,110,650,1,0,0,0,112,652,1,0,0,0,114,654,1,0,
0,0,116,656,1,0,0,0,118,658,1,0,0,0,120,660,1,0,0,0,122,662,1,0,0,0,124,
126,3,2,1,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,0,
0,1,128,1,1,0,0,0,129,131,3,4,2,0,130,129,1,0,0,0,131,132,1,0,0,0,132,130,
1,0,0,0,132,133,1,0,0,0,133,3,1,0,0,0,134,158,3,6,3,0,135,158,3,22,11,0,
136,158,3,46,23,0,137,158,3,8,4,0,138,158,3,10,5,0,139,158,3,16,8,0,140,
158,3,18,9,0,141,158,3,40,20,0,142,158,3,12,6,0,143,158,3,14,7,0,144,158,
3,34,17,0,145,158,3,32,16,0,146,158,3,20,10,0,147,158,3,104,52,0,148,158,
3,106,53,0,149,158,3,108,54,0,150,158,3,98,49,0,151,158,3,52,26,0,152,158,
3,44,22,0,153,158,3,62,31,0,154,158,3,60,30,0,155,158,3,84,42,0,156,158,
3,86,43,0,157,134,1,0,0,0,157,135,1,0,0,0,157,136,1,0,0,0,157,137,1,0,0,
0,157,138,1,0,0,0,157,139,1,0,0,0,157,140,1,0,0,0,157,141,1,0,0,0,157,142,
1,0,0,0,157,143,1,0,0,0,157,144,1,0,0,0,157,145,1,0,0,0,157,146,1,0,0,0,
157,147,1,0,0,0,157,148,1,0,0,0,157,149,1,0,0,0,157,150,1,0,0,0,157,151,
1,0,0,0,157,152,1,0,0,0,157,153,1,0,0,0,157,154,1,0,0,0,157,155,1,0,0,0,
157,156,1,0,0,0,158,160,1,0,0,0,159,161,3,120,60,0,160,159,1,0,0,0,160,161,
1,0,0,0,161,5,1,0,0,0,162,164,3,116,58,0,163,165,3,2,1,0,164,163,1,0,0,0,
164,165,1,0,0,0,165,166,1,0,0,0,166,167,3,118,59,0,167,7,1,0,0,0,168,169,
5,85,0,0,169,171,3,58,29,0,170,172,5,86,0,0,171,170,1,0,0,0,171,172,1,0,
0,0,172,173,1,0,0,0,173,176,3,4,2,0,174,175,5,69,0,0,175,177,3,4,2,0,176,
174,1,0,0,0,176,177,1,0,0,0,177,9,1,0,0,0,178,179,5,67,0,0,179,180,3,4,2,
0,180,181,5,80,0,0,181,182,3,58,29,0,182,208,1,0,0,0,183,184,5,79,0,0,184,
185,3,58,29,0,185,186,3,4,2,0,186,208,1,0,0,0,187,188,5,77,0,0,188,191,5,
5,0,0,189,192,3,46,23,0,190,192,3,44,22,0,191,189,1,0,0,0,191,190,1,0,0,
0,191,192,1,0,0,0,192,193,1,0,0,0,193,195,5,12,0,0,194,196,3,58,29,0,195,
194,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,199,5,12,0,0,198,200,3,4,
2,0,199,198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,202,5,6,0,0,202,
208,3,4,2,0,203,204,5,81,0,0,204,205,3,58,29,0,205,206,3,4,2,0,206,208,1,
0,0,0,207,178,1,0,0,0,207,183,1,0,0,0,207,187,1,0,0,0,207,203,1,0,0,0,208,
11,1,0,0,0,209,210,5,83,0,0,210,211,5,5,0,0,211,212,3,58,29,0,212,213,5,
6,0,0,213,214,3,4,2,0,214,13,1,0,0,0,215,216,5,78,0,0,216,217,5,5,0,0,217,
218,3,58,29,0,218,219,5,6,0,0,219,220,3,24,12,0,220,15,1,0,0,0,221,222,5,
76,0,0,222,17,1,0,0,0,223,224,5,65,0,0,224,19,1,0,0,0,225,226,5,66,0,0,226,
21,1,0,0,0,227,228,5,12,0,0,228,23,1,0,0,0,229,231,3,116,58,0,230,232,3,
26,13,0,231,230,1,0,0,0,231,232,1,0,0,0,232,237,1,0,0,0,233,235,3,30,15,
0,234,236,3,26,13,0,235,234,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,
233,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,3,118,59,0,240,25,1,
0,0,0,241,243,3,28,14,0,242,241,1,0,0,0,243,244,1,0,0,0,244,242,1,0,0,0,
244,245,1,0,0,0,245,27,1,0,0,0,246,247,5,68,0,0,247,248,3,58,29,0,248,250,
5,15,0,0,249,251,3,2,1,0,250,249,1,0,0,0,250,251,1,0,0,0,251,29,1,0,0,0,
252,253,5,84,0,0,253,255,5,15,0,0,254,256,3,2,1,0,255,254,1,0,0,0,255,256,
1,0,0,0,256,31,1,0,0,0,257,258,5,87,0,0,258,259,3,58,29,0,259,33,1,0,0,0,
260,261,5,89,0,0,261,267,3,4,2,0,262,264,3,36,18,0,263,265,3,38,19,0,264,
263,1,0,0,0,264,265,1,0,0,0,265,268,1,0,0,0,266,268,3,38,19,0,267,262,1,
0,0,0,267,266,1,0,0,0,268,35,1,0,0,0,269,275,5,73,0,0,270,272,5,5,0,0,271,
273,3,96,48,0,272,271,1,0,0,0,272,273,1,0,0,0,273,274,1,0,0,0,274,276,5,
6,0,0,275,270,1,0,0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,278,3,4,2,0,278,
37,1,0,0,0,279,280,5,74,0,0,280,281,3,4,2,0,281,39,1,0,0,0,282,284,5,75,
0,0,283,285,3,58,29,0,284,283,1,0,0,0,284,285,1,0,0,0,285,41,1,0,0,0,286,
287,5,88,0,0,287,288,3,58,29,0,288,43,1,0,0,0,289,290,3,54,27,0,290,291,
3,70,35,0,291,292,3,58,29,0,292,45,1,0,0,0,293,294,3,48,24,0,294,299,3,50,
25,0,295,296,5,13,0,0,296,298,3,50,25,0,297,295,1,0,0,0,298,301,1,0,0,0,
299,297,1,0,0,0,299,300,1,0,0,0,300,47,1,0,0,0,301,299,1,0,0,0,302,304,5,
71,0,0,303,302,1,0,0,0,304,305,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,
309,1,0,0,0,307,309,5,92,0,0,308,303,1,0,0,0,308,307,1,0,0,0,309,49,1,0,
0,0,310,313,3,96,48,0,311,312,5,14,0,0,312,314,3,58,29,0,313,311,1,0,0,0,
313,314,1,0,0,0,314,51,1,0,0,0,315,316,5,72,0,0,316,321,3,96,48,0,317,318,
5,13,0,0,318,320,3,96,48,0,319,317,1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,
0,321,322,1,0,0,0,322,324,1,0,0,0,323,321,1,0,0,0,324,325,5,12,0,0,325,53,
1,0,0,0,326,327,6,27,-1,0,327,328,3,96,48,0,328,342,1,0,0,0,329,330,10,3,
0,0,330,332,5,3,0,0,331,333,3,64,32,0,332,331,1,0,0,0,332,333,1,0,0,0,333,
334,1,0,0,0,334,335,3,56,28,0,335,336,5,4,0,0,336,341,1,0,0,0,337,338,10,
2,0,0,338,339,5,16,0,0,339,341,3,96,48,0,340,329,1,0,0,0,340,337,1,0,0,0,
341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,55,1,0,0,0,344,342,1,
0,0,0,345,350,3,58,29,0,346,347,5,13,0,0,347,349,3,58,29,0,348,346,1,0,0,
0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,57,1,0,0,0,352,350,
1,0,0,0,353,354,6,29,-1,0,354,355,5,82,0,0,355,356,3,88,44,0,356,357,3,4,
2,0,357,380,1,0,0,0,358,359,5,70,0,0,359,360,3,96,48,0,360,361,3,66,33,0,
361,380,1,0,0,0,362,363,3,54,27,0,363,364,7,0,0,0,364,380,1,0,0,0,365,366,
7,0,0,0,366,380,3,54,27,0,367,368,5,20,0,0,368,380,3,58,29,19,369,370,5,
21,0,0,370,380,3,58,29,18,371,372,5,22,0,0,372,380,3,58,29,17,373,380,3,
96,48,0,374,380,3,72,36,0,375,376,5,5,0,0,376,377,3,58,29,0,377,378,5,6,
0,0,378,380,1,0,0,0,379,353,1,0,0,0,379,358,1,0,0,0,379,362,1,0,0,0,379,
365,1,0,0,0,379,367,1,0,0,0,379,369,1,0,0,0,379,371,1,0,0,0,379,373,1,0,
0,0,379,374,1,0,0,0,379,375,1,0,0,0,380,438,1,0,0,0,381,382,10,24,0,0,382,
383,5,16,0,0,383,437,3,58,29,25,384,385,10,16,0,0,385,386,7,1,0,0,386,437,
3,58,29,17,387,388,10,15,0,0,388,389,7,2,0,0,389,437,3,58,29,16,390,391,
10,14,0,0,391,392,5,29,0,0,392,437,3,58,29,15,393,394,10,13,0,0,394,395,
7,3,0,0,395,437,3,58,29,14,396,397,10,12,0,0,397,398,5,43,0,0,398,437,3,
58,29,13,399,400,10,11,0,0,400,401,5,42,0,0,401,437,3,58,29,12,402,403,10,
10,0,0,403,404,5,44,0,0,404,437,3,58,29,11,405,406,10,9,0,0,406,407,7,4,
0,0,407,437,3,58,29,10,408,409,10,8,0,0,409,410,7,5,0,0,410,437,3,58,29,
9,411,412,10,7,0,0,412,413,5,39,0,0,413,437,3,58,29,8,414,415,10,6,0,0,415,
416,5,41,0,0,416,437,3,58,29,7,417,418,10,5,0,0,418,419,5,40,0,0,419,437,
3,58,29,6,420,421,10,4,0,0,421,422,5,28,0,0,422,423,3,58,29,0,423,424,5,
15,0,0,424,425,3,58,29,5,425,437,1,0,0,0,426,427,10,25,0,0,427,429,5,3,0,
0,428,430,3,64,32,0,429,428,1,0,0,0,429,430,1,0,0,0,430,431,1,0,0,0,431,
432,3,56,28,0,432,433,5,4,0,0,433,437,1,0,0,0,434,435,10,22,0,0,435,437,
3,66,33,0,436,381,1,0,0,0,436,384,1,0,0,0,436,387,1,0,0,0,436,390,1,0,0,
0,436,393,1,0,0,0,436,396,1,0,0,0,436,399,1,0,0,0,436,402,1,0,0,0,436,405,
1,0,0,0,436,408,1,0,0,0,436,411,1,0,0,0,436,414,1,0,0,0,436,417,1,0,0,0,
436,420,1,0,0,0,436,426,1,0,0,0,436,434,1,0,0,0,437,440,1,0,0,0,438,436,
1,0,0,0,438,439,1,0,0,0,439,59,1,0,0,0,440,438,1,0,0,0,441,442,3,58,29,0,
442,443,3,66,33,0,443,61,1,0,0,0,444,445,3,54,27,0,445,446,5,17,0,0,446,
455,1,0,0,0,447,448,3,54,27,0,448,449,5,18,0,0,449,455,1,0,0,0,450,451,5,
17,0,0,451,455,3,54,27,0,452,453,5,18,0,0,453,455,3,54,27,0,454,444,1,0,
0,0,454,447,1,0,0,0,454,450,1,0,0,0,454,452,1,0,0,0,455,63,1,0,0,0,456,457,
7,6,0,0,457,65,1,0,0,0,458,470,5,5,0,0,459,464,3,68,34,0,460,461,5,13,0,
0,461,463,3,68,34,0,462,460,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,
465,1,0,0,0,465,468,1,0,0,0,466,464,1,0,0,0,467,469,5,13,0,0,468,467,1,0,
0,0,468,469,1,0,0,0,469,471,1,0,0,0,470,459,1,0,0,0,470,471,1,0,0,0,471,
472,1,0,0,0,472,473,5,6,0,0,473,67,1,0,0,0,474,475,3,58,29,0,475,69,1,0,
0,0,476,477,7,7,0,0,477,71,1,0,0,0,478,491,5,58,0,0,479,491,5,59,0,0,480,
491,5,60,0,0,481,491,5,99,0,0,482,491,5,101,0,0,483,491,3,74,37,0,484,491,
5,64,0,0,485,491,5,63,0,0,486,491,5,62,0,0,487,491,5,61,0,0,488,491,3,78,
39,0,489,491,3,82,41,0,490,478,1,0,0,0,490,479,1,0,0,0,490,480,1,0,0,0,490,
481,1,0,0,0,490,482,1,0,0,0,490,483,1,0,0,0,490,484,1,0,0,0,490,485,1,0,
0,0,490,486,1,0,0,0,490,487,1,0,0,0,490,488,1,0,0,0,490,489,1,0,0,0,491,
73,1,0,0,0,492,496,5,100,0,0,493,495,3,76,38,0,494,493,1,0,0,0,495,498,1,
0,0,0,496,494,1,0,0,0,496,497,1,0,0,0,497,499,1,0,0,0,498,496,1,0,0,0,499,
500,5,107,0,0,500,75,1,0,0,0,501,507,5,109,0,0,502,503,5,108,0,0,503,504,
3,58,29,0,504,505,5,8,0,0,505,507,1,0,0,0,506,501,1,0,0,0,506,502,1,0,0,
0,507,77,1,0,0,0,508,509,5,3,0,0,509,510,3,80,40,0,510,511,5,4,0,0,511,79,
1,0,0,0,512,514,5,13,0,0,513,512,1,0,0,0,514,517,1,0,0,0,515,513,1,0,0,0,
515,516,1,0,0,0,516,519,1,0,0,0,517,515,1,0,0,0,518,520,3,58,29,0,519,518,
1,0,0,0,519,520,1,0,0,0,520,529,1,0,0,0,521,523,5,13,0,0,522,521,1,0,0,0,
523,524,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,526,1,0,0,0,526,528,
3,58,29,0,527,522,1,0,0,0,528,531,1,0,0,0,529,527,1,0,0,0,529,530,1,0,0,
0,530,535,1,0,0,0,531,529,1,0,0,0,532,534,5,13,0,0,533,532,1,0,0,0,534,537,
1,0,0,0,535,533,1,0,0,0,535,536,1,0,0,0,536,81,1,0,0,0,537,535,1,0,0,0,538,
550,3,116,58,0,539,544,3,92,46,0,540,541,5,13,0,0,541,543,3,92,46,0,542,
540,1,0,0,0,543,546,1,0,0,0,544,542,1,0,0,0,544,545,1,0,0,0,545,548,1,0,
0,0,546,544,1,0,0,0,547,549,5,13,0,0,548,547,1,0,0,0,548,549,1,0,0,0,549,
551,1,0,0,0,550,539,1,0,0,0,550,551,1,0,0,0,551,552,1,0,0,0,552,553,3,118,
59,0,553,83,1,0,0,0,554,555,5,82,0,0,555,556,3,96,48,0,556,557,3,88,44,0,
557,558,3,4,2,0,558,85,1,0,0,0,559,561,5,82,0,0,560,562,3,96,48,0,561,560,
1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,568,3,88,44,0,564,565,5,15,0,
0,565,566,3,96,48,0,566,567,3,88,44,0,567,569,1,0,0,0,568,564,1,0,0,0,568,
569,1,0,0,0,569,570,1,0,0,0,570,571,5,91,0,0,571,572,3,4,2,0,572,87,1,0,
0,0,573,585,5,5,0,0,574,579,3,90,45,0,575,576,5,13,0,0,576,578,3,90,45,0,
577,575,1,0,0,0,578,581,1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,580,583,
1,0,0,0,581,579,1,0,0,0,582,584,5,13,0,0,583,582,1,0,0,0,583,584,1,0,0,0,
584,586,1,0,0,0,585,574,1,0,0,0,585,586,1,0,0,0,586,587,1,0,0,0,587,588,
5,6,0,0,588,89,1,0,0,0,589,592,3,96,48,0,590,591,5,14,0,0,591,593,3,58,29,
0,592,590,1,0,0,0,592,593,1,0,0,0,593,91,1,0,0,0,594,595,3,94,47,0,595,596,
5,15,0,0,596,597,3,58,29,0,597,93,1,0,0,0,598,602,5,98,0,0,599,602,3,112,
56,0,600,602,3,114,57,0,601,598,1,0,0,0,601,599,1,0,0,0,601,600,1,0,0,0,
602,95,1,0,0,0,603,606,5,98,0,0,604,606,3,112,56,0,605,603,1,0,0,0,605,604,
1,0,0,0,606,97,1,0,0,0,607,608,5,90,0,0,608,609,3,96,48,0,609,611,3,116,
58,0,610,612,3,100,50,0,611,610,1,0,0,0,611,612,1,0,0,0,612,614,1,0,0,0,
613,615,5,13,0,0,614,613,1,0,0,0,614,615,1,0,0,0,615,616,1,0,0,0,616,617,
3,118,59,0,617,99,1,0,0,0,618,623,3,102,51,0,619,620,5,13,0,0,620,622,3,
102,51,0,621,619,1,0,0,0,622,625,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,
624,101,1,0,0,0,625,623,1,0,0,0,626,629,3,96,48,0,627,628,5,14,0,0,628,630,
5,61,0,0,629,627,1,0,0,0,629,630,1,0,0,0,630,103,1,0,0,0,631,632,5,93,0,
0,632,634,3,96,48,0,633,635,3,122,61,0,634,633,1,0,0,0,635,636,1,0,0,0,636,
634,1,0,0,0,636,637,1,0,0,0,637,638,1,0,0,0,638,639,7,8,0,0,639,105,1,0,
0,0,640,641,5,95,0,0,641,642,5,105,0,0,642,643,7,9,0,0,643,107,1,0,0,0,644,
646,7,10,0,0,645,647,5,105,0,0,646,645,1,0,0,0,646,647,1,0,0,0,647,648,1,
0,0,0,648,649,7,9,0,0,649,109,1,0,0,0,650,651,3,96,48,0,651,111,1,0,0,0,
652,653,5,91,0,0,653,113,1,0,0,0,654,655,5,59,0,0,655,115,1,0,0,0,656,657,
7,11,0,0,657,117,1,0,0,0,658,659,7,12,0,0,659,119,1,0,0,0,660,661,5,12,0,
0,661,121,1,0,0,0,662,663,7,13,0,0,663,123,1,0,0,0,64,125,132,157,160,164,
171,176,191,195,199,207,231,235,237,244,250,255,264,267,272,275,284,299,
305,308,313,321,332,340,342,350,379,429,436,438,454,464,468,470,490,496,
506,515,519,524,529,535,544,548,550,561,568,579,583,585,592,601,605,611,
614,623,629,636,646];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GameMakerLanguageParser extends antlr4.Parser {

    static grammarFileName = "GameMakerLanguageParser.g4";
    static literalNames = [ null, null, null, "'['", "']'", "'('", "')'", 
                            null, null, "'}'", "'begin'", "'end'", "';'", 
                            "','", null, "':'", "'.'", "'++'", "'--'", "'+'", 
                            "'-'", "'~'", null, "'*'", "'/'", "'div'", null, 
                            "'**'", "'?'", "'??'", "'??='", "'>>'", "'<<'", 
                            "'<'", "'>'", "'<='", "'>='", "'=='", null, 
                            "'&'", "'^'", "'|'", null, null, null, "'*='", 
                            "'/='", "'+='", "'-='", "'%='", "'<<='", "'>>='", 
                            "'&='", "'^='", "'|='", "'#'", "'$'", "'@'", 
                            "'undefined'", "'noone'", null, null, null, 
                            null, null, "'break'", "'exit'", "'do'", "'case'", 
                            "'else'", "'new'", "'var'", "'globalvar'", "'catch'", 
                            "'finally'", "'return'", "'continue'", "'for'", 
                            "'switch'", "'while'", "'until'", "'repeat'", 
                            "'function'", "'with'", "'default'", "'if'", 
                            "'then'", "'throw'", "'delete'", "'try'", "'enum'", 
                            "'constructor'", "'static'", "'#macro'", "'\\'", 
                            "'#define'", "'#region'", "'#endregion'" ];
    static symbolicNames = [ null, "MultiLineComment", "SingleLineComment", 
                             "OpenBracket", "CloseBracket", "OpenParen", 
                             "CloseParen", "OpenBrace", "TemplateStringEndExpression", 
                             "CloseBrace", "Begin", "End", "SemiColon", 
                             "Comma", "Assign", "Colon", "Dot", "PlusPlus", 
                             "MinusMinus", "Plus", "Minus", "BitNot", "Not", 
                             "Multiply", "Divide", "IntegerDivide", "Modulo", 
                             "Power", "QuestionMark", "NullCoalesce", "NullCoalescingAssign", 
                             "RightShiftArithmetic", "LeftShiftArithmetic", 
                             "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
                             "Equals_", "NotEquals", "BitAnd", "BitXOr", 
                             "BitOr", "And", "Or", "Xor", "MultiplyAssign", 
                             "DivideAssign", "PlusAssign", "MinusAssign", 
                             "ModulusAssign", "LeftShiftArithmeticAssign", 
                             "RightShiftArithmeticAssign", "BitAndAssign", 
                             "BitXorAssign", "BitOrAssign", "NumberSign", 
                             "DollarSign", "AtSign", "UndefinedLiteral", 
                             "NoOneLiteral", "BooleanLiteral", "IntegerLiteral", 
                             "DecimalLiteral", "BinaryLiteral", "HexIntegerLiteral", 
                             "Break", "Exit", "Do", "Case", "Else", "New", 
                             "Var", "GlobalVar", "Catch", "Finally", "Return", 
                             "Continue", "For", "Switch", "While", "Until", 
                             "Repeat", "Function_", "With", "Default", "If", 
                             "Then", "Throw", "Delete", "Try", "Enum", "Constructor", 
                             "Static", "Macro", "EscapedNewLine", "Define", 
                             "Region", "EndRegion", "Identifier", "StringLiteral", 
                             "TemplateStringStart", "VerbatimStringLiteral", 
                             "WhiteSpaces", "LineTerminator", "UnexpectedCharacter", 
                             "RegionCharacters", "RegionEOL", "TemplateStringEnd", 
                             "TemplateStringStartExpression", "TemplateStringText" ];
    static ruleNames = [ "program", "statementList", "statement", "block", 
                         "ifStatement", "iterationStatement", "withStatement", 
                         "switchStatement", "continueStatement", "breakStatement", 
                         "exitStatement", "emptyStatement", "caseBlock", 
                         "caseClauses", "caseClause", "defaultClause", "throwStatement", 
                         "tryStatement", "catchProduction", "finallyProduction", 
                         "returnStatement", "deleteStatement", "assignmentExpression", 
                         "variableDeclarationList", "varModifier", "variableDeclaration", 
                         "globalVarStatement", "lValueExpression", "expressionSequence", 
                         "expression", "callStatement", "incDecStatement", 
                         "accessorQualifier", "arguments", "argument", "assignmentOperator", 
                         "literal", "templateStringLiteral", "templateStringAtom", 
                         "arrayLiteral", "elementList", "structLiteral", 
                         "functionDeclaration", "constructorDeclaration", 
                         "parameterList", "parameterArgument", "propertyAssignment", 
                         "propertyIdentifier", "identifier", "enumeratorDeclaration", 
                         "enumeratorList", "enumerator", "macroStatement", 
                         "defineStatement", "regionStatement", "identifierStatement", 
                         "softKeyword", "propertySoftKeyword", "openBlock", 
                         "closeBlock", "eos", "macroToken" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GameMakerLanguageParser.ruleNames;
        this.literalNames = GameMakerLanguageParser.literalNames;
        this.symbolicNames = GameMakerLanguageParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 27:
    	    		return this.lValueExpression_sempred(localctx, predIndex);
    	case 29:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    lValueExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 24);
    		case 3:
    			return this.precpred(this._ctx, 16);
    		case 4:
    			return this.precpred(this._ctx, 15);
    		case 5:
    			return this.precpred(this._ctx, 14);
    		case 6:
    			return this.precpred(this._ctx, 13);
    		case 7:
    			return this.precpred(this._ctx, 12);
    		case 8:
    			return this.precpred(this._ctx, 11);
    		case 9:
    			return this.precpred(this._ctx, 10);
    		case 10:
    			return this.precpred(this._ctx, 9);
    		case 11:
    			return this.precpred(this._ctx, 8);
    		case 12:
    			return this.precpred(this._ctx, 7);
    		case 13:
    			return this.precpred(this._ctx, 6);
    		case 14:
    			return this.precpred(this._ctx, 5);
    		case 15:
    			return this.precpred(this._ctx, 4);
    		case 16:
    			return this.precpred(this._ctx, 25);
    		case 17:
    			return this.precpred(this._ctx, 22);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GameMakerLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0)) {
	            this.state = 124;
	            this.statementList();
	        }

	        this.state = 127;
	        this.match(GameMakerLanguageParser.EOF);
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



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GameMakerLanguageParser.RULE_statementList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 129;
	            this.statement();
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0));
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GameMakerLanguageParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 134;
	            this.block();
	            break;

	        case 2:
	            this.state = 135;
	            this.emptyStatement();
	            break;

	        case 3:
	            this.state = 136;
	            this.variableDeclarationList();
	            break;

	        case 4:
	            this.state = 137;
	            this.ifStatement();
	            break;

	        case 5:
	            this.state = 138;
	            this.iterationStatement();
	            break;

	        case 6:
	            this.state = 139;
	            this.continueStatement();
	            break;

	        case 7:
	            this.state = 140;
	            this.breakStatement();
	            break;

	        case 8:
	            this.state = 141;
	            this.returnStatement();
	            break;

	        case 9:
	            this.state = 142;
	            this.withStatement();
	            break;

	        case 10:
	            this.state = 143;
	            this.switchStatement();
	            break;

	        case 11:
	            this.state = 144;
	            this.tryStatement();
	            break;

	        case 12:
	            this.state = 145;
	            this.throwStatement();
	            break;

	        case 13:
	            this.state = 146;
	            this.exitStatement();
	            break;

	        case 14:
	            this.state = 147;
	            this.macroStatement();
	            break;

	        case 15:
	            this.state = 148;
	            this.defineStatement();
	            break;

	        case 16:
	            this.state = 149;
	            this.regionStatement();
	            break;

	        case 17:
	            this.state = 150;
	            this.enumeratorDeclaration();
	            break;

	        case 18:
	            this.state = 151;
	            this.globalVarStatement();
	            break;

	        case 19:
	            this.state = 152;
	            this.assignmentExpression();
	            break;

	        case 20:
	            this.state = 153;
	            this.incDecStatement();
	            break;

	        case 21:
	            this.state = 154;
	            this.callStatement();
	            break;

	        case 22:
	            this.state = 155;
	            this.functionDeclaration();
	            break;

	        case 23:
	            this.state = 156;
	            this.constructorDeclaration();
	            break;

	        }
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.eos();

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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GameMakerLanguageParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.openBlock();
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0)) {
	            this.state = 163;
	            this.statementList();
	        }

	        this.state = 166;
	        this.closeBlock();
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GameMakerLanguageParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(GameMakerLanguageParser.If);
	        this.state = 169;
	        this.expression(0);
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===86) {
	            this.state = 170;
	            this.match(GameMakerLanguageParser.Then);
	        }

	        this.state = 173;
	        this.statement();
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 174;
	            this.match(GameMakerLanguageParser.Else);
	            this.state = 175;
	            this.statement();

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



	iterationStatement() {
	    let localctx = new IterationStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GameMakerLanguageParser.RULE_iterationStatement);
	    var _la = 0;
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 67:
	            localctx = new DoStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(GameMakerLanguageParser.Do);
	            this.state = 179;
	            this.statement();
	            this.state = 180;
	            this.match(GameMakerLanguageParser.Until);
	            this.state = 181;
	            this.expression(0);
	            break;
	        case 79:
	            localctx = new WhileStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 183;
	            this.match(GameMakerLanguageParser.While);
	            this.state = 184;
	            this.expression(0);
	            this.state = 185;
	            this.statement();
	            break;
	        case 77:
	            localctx = new ForStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 187;
	            this.match(GameMakerLanguageParser.For);
	            this.state = 188;
	            this.match(GameMakerLanguageParser.OpenParen);
	            this.state = 191;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 71:
	            case 92:
	            	this.state = 189;
	            	this.variableDeclarationList();
	            	break;
	            case 91:
	            case 98:
	            	this.state = 190;
	            	this.assignmentExpression();
	            	break;
	            case 12:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 193;
	            this.match(GameMakerLanguageParser.SemiColon);
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7734440) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 16781439) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 1921) !== 0)) {
	                this.state = 194;
	                this.expression(0);
	            }

	            this.state = 197;
	            this.match(GameMakerLanguageParser.SemiColon);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0)) {
	                this.state = 198;
	                this.statement();
	            }

	            this.state = 201;
	            this.match(GameMakerLanguageParser.CloseParen);
	            this.state = 202;
	            this.statement();
	            break;
	        case 81:
	            localctx = new RepeatStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 203;
	            this.match(GameMakerLanguageParser.Repeat);
	            this.state = 204;
	            this.expression(0);
	            this.state = 205;
	            this.statement();
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



	withStatement() {
	    let localctx = new WithStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GameMakerLanguageParser.RULE_withStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(GameMakerLanguageParser.With);
	        this.state = 210;
	        this.match(GameMakerLanguageParser.OpenParen);
	        this.state = 211;
	        this.expression(0);
	        this.state = 212;
	        this.match(GameMakerLanguageParser.CloseParen);
	        this.state = 213;
	        this.statement();
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
	    this.enterRule(localctx, 14, GameMakerLanguageParser.RULE_switchStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(GameMakerLanguageParser.Switch);
	        this.state = 216;
	        this.match(GameMakerLanguageParser.OpenParen);
	        this.state = 217;
	        this.expression(0);
	        this.state = 218;
	        this.match(GameMakerLanguageParser.CloseParen);
	        this.state = 219;
	        this.caseBlock();
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



	continueStatement() {
	    let localctx = new ContinueStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GameMakerLanguageParser.RULE_continueStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(GameMakerLanguageParser.Continue);
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



	breakStatement() {
	    let localctx = new BreakStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GameMakerLanguageParser.RULE_breakStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(GameMakerLanguageParser.Break);
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



	exitStatement() {
	    let localctx = new ExitStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GameMakerLanguageParser.RULE_exitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(GameMakerLanguageParser.Exit);
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



	emptyStatement() {
	    let localctx = new EmptyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GameMakerLanguageParser.RULE_emptyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(GameMakerLanguageParser.SemiColon);
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



	caseBlock() {
	    let localctx = new CaseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GameMakerLanguageParser.RULE_caseBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.openBlock();
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===68) {
	            this.state = 230;
	            this.caseClauses();
	        }

	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===84) {
	            this.state = 233;
	            this.defaultClause();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===68) {
	                this.state = 234;
	                this.caseClauses();
	            }

	        }

	        this.state = 239;
	        this.closeBlock();
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



	caseClauses() {
	    let localctx = new CaseClausesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GameMakerLanguageParser.RULE_caseClauses);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 241;
	            this.caseClause();
	            this.state = 244; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===68);
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



	caseClause() {
	    let localctx = new CaseClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GameMakerLanguageParser.RULE_caseClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(GameMakerLanguageParser.Case);
	        this.state = 247;
	        this.expression(0);
	        this.state = 248;
	        this.match(GameMakerLanguageParser.Colon);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0)) {
	            this.state = 249;
	            this.statementList();
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



	defaultClause() {
	    let localctx = new DefaultClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GameMakerLanguageParser.RULE_defaultClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(GameMakerLanguageParser.Default);
	        this.state = 253;
	        this.match(GameMakerLanguageParser.Colon);
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7738536) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2881385471) !== 0) || ((((_la - 90)) & ~0x1f) === 0 && ((1 << (_la - 90)) & 4079) !== 0)) {
	            this.state = 254;
	            this.statementList();
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



	throwStatement() {
	    let localctx = new ThrowStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GameMakerLanguageParser.RULE_throwStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(GameMakerLanguageParser.Throw);
	        this.state = 258;
	        this.expression(0);
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



	tryStatement() {
	    let localctx = new TryStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GameMakerLanguageParser.RULE_tryStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(GameMakerLanguageParser.Try);
	        this.state = 261;
	        this.statement();
	        this.state = 267;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.state = 262;
	            this.catchProduction();
	            this.state = 264;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 263;
	                this.finallyProduction();

	            }
	            break;
	        case 74:
	            this.state = 266;
	            this.finallyProduction();
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



	catchProduction() {
	    let localctx = new CatchProductionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GameMakerLanguageParser.RULE_catchProduction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(GameMakerLanguageParser.Catch);
	        this.state = 275;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 270;
	            this.match(GameMakerLanguageParser.OpenParen);
	            this.state = 272;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===91 || _la===98) {
	                this.state = 271;
	                this.identifier();
	            }

	            this.state = 274;
	            this.match(GameMakerLanguageParser.CloseParen);

	        }
	        this.state = 277;
	        this.statement();
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



	finallyProduction() {
	    let localctx = new FinallyProductionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GameMakerLanguageParser.RULE_finallyProduction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(GameMakerLanguageParser.Finally);
	        this.state = 280;
	        this.statement();
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



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GameMakerLanguageParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(GameMakerLanguageParser.Return);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        if(la_===1) {
	            this.state = 283;
	            this.expression(0);

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



	deleteStatement() {
	    let localctx = new DeleteStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GameMakerLanguageParser.RULE_deleteStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(GameMakerLanguageParser.Delete);
	        this.state = 287;
	        this.expression(0);
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



	assignmentExpression() {
	    let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GameMakerLanguageParser.RULE_assignmentExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.lValueExpression(0);
	        this.state = 290;
	        this.assignmentOperator();
	        this.state = 291;
	        this.expression(0);
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



	variableDeclarationList() {
	    let localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GameMakerLanguageParser.RULE_variableDeclarationList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.varModifier();
	        this.state = 294;
	        this.variableDeclaration();
	        this.state = 299;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 295;
	                this.match(GameMakerLanguageParser.Comma);
	                this.state = 296;
	                this.variableDeclaration(); 
	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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



	varModifier() {
	    let localctx = new VarModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GameMakerLanguageParser.RULE_varModifier);
	    var _la = 0;
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 303; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 302;
	                this.match(GameMakerLanguageParser.Var);
	                this.state = 305; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===71);
	            break;
	        case 92:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 307;
	            this.match(GameMakerLanguageParser.Static);
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GameMakerLanguageParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.identifier();
	        this.state = 313;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 311;
	            this.match(GameMakerLanguageParser.Assign);
	            this.state = 312;
	            this.expression(0);

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



	globalVarStatement() {
	    let localctx = new GlobalVarStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, GameMakerLanguageParser.RULE_globalVarStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(GameMakerLanguageParser.GlobalVar);
	        this.state = 316;
	        this.identifier();
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 317;
	            this.match(GameMakerLanguageParser.Comma);
	            this.state = 318;
	            this.identifier();
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 324;
	        this.match(GameMakerLanguageParser.SemiColon);
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


	lValueExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LValueExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, GameMakerLanguageParser.RULE_lValueExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new IdentifierLValueContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 327;
	        this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 342;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 340;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MemberIndexLValueContext(this, new LValueExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_lValueExpression);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 330;
	                    this.match(GameMakerLanguageParser.OpenBracket);
	                    this.state = 332;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 939532289) !== 0)) {
	                        this.state = 331;
	                        this.accessorQualifier();
	                    }

	                    this.state = 334;
	                    this.expressionSequence();
	                    this.state = 335;
	                    this.match(GameMakerLanguageParser.CloseBracket);
	                    break;

	                case 2:
	                    localctx = new MemberDotLValueContext(this, new LValueExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_lValueExpression);
	                    this.state = 337;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 338;
	                    this.match(GameMakerLanguageParser.Dot);
	                    this.state = 339;
	                    this.identifier();
	                    break;

	                } 
	            }
	            this.state = 344;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	expressionSequence() {
	    let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GameMakerLanguageParser.RULE_expressionSequence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.expression(0);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 346;
	            this.match(GameMakerLanguageParser.Comma);
	            this.state = 347;
	            this.expression(0);
	            this.state = 352;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, GameMakerLanguageParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 354;
	            this.match(GameMakerLanguageParser.Function_);
	            this.state = 355;
	            this.parameterList();
	            this.state = 356;
	            this.statement();
	            break;

	        case 2:
	            localctx = new NewExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 358;
	            this.match(GameMakerLanguageParser.New);
	            this.state = 359;
	            this.identifier();
	            this.state = 360;
	            this.arguments();
	            break;

	        case 3:
	            localctx = new PostIncDecExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 362;
	            this.lValueExpression(0);
	            this.state = 363;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 4:
	            localctx = new PreIncDecExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 365;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===18)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 366;
	            this.lValueExpression(0);
	            break;

	        case 5:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 367;
	            this.match(GameMakerLanguageParser.Minus);
	            this.state = 368;
	            this.expression(19);
	            break;

	        case 6:
	            localctx = new BitNotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 369;
	            this.match(GameMakerLanguageParser.BitNot);
	            this.state = 370;
	            this.expression(18);
	            break;

	        case 7:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 371;
	            this.match(GameMakerLanguageParser.Not);
	            this.state = 372;
	            this.expression(17);
	            break;

	        case 8:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 373;
	            this.identifier();
	            break;

	        case 9:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 374;
	            this.literal();
	            break;

	        case 10:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 375;
	            this.match(GameMakerLanguageParser.OpenParen);
	            this.state = 376;
	            this.expression(0);
	            this.state = 377;
	            this.match(GameMakerLanguageParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 438;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 436;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MemberDotExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 381;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 382;
	                    this.match(GameMakerLanguageParser.Dot);
	                    this.state = 383;
	                    this.expression(25);
	                    break;

	                case 2:
	                    localctx = new MultiplicativeExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 384;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 385;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 125829120) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 386;
	                    this.expression(17);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 387;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 388;
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 389;
	                    this.expression(16);
	                    break;

	                case 4:
	                    localctx = new CoalesceExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 390;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 391;
	                    this.match(GameMakerLanguageParser.NullCoalesce);
	                    this.state = 392;
	                    this.expression(15);
	                    break;

	                case 5:
	                    localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 393;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 394;
	                    _la = this._input.LA(1);
	                    if(!(_la===31 || _la===32)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 395;
	                    this.expression(14);
	                    break;

	                case 6:
	                    localctx = new LogicalOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 396;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 397;
	                    this.match(GameMakerLanguageParser.Or);
	                    this.state = 398;
	                    this.expression(13);
	                    break;

	                case 7:
	                    localctx = new LogicalAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 399;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 400;
	                    this.match(GameMakerLanguageParser.And);
	                    this.state = 401;
	                    this.expression(12);
	                    break;

	                case 8:
	                    localctx = new LogicalXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 402;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 403;
	                    this.match(GameMakerLanguageParser.Xor);
	                    this.state = 404;
	                    this.expression(11);
	                    break;

	                case 9:
	                    localctx = new EqualityExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 405;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 406;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 25165825) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 407;
	                    this.expression(10);
	                    break;

	                case 10:
	                    localctx = new RelationalExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 408;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 409;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 15) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 410;
	                    this.expression(9);
	                    break;

	                case 11:
	                    localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 411;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 412;
	                    this.match(GameMakerLanguageParser.BitAnd);
	                    this.state = 413;
	                    this.expression(8);
	                    break;

	                case 12:
	                    localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 414;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 415;
	                    this.match(GameMakerLanguageParser.BitOr);
	                    this.state = 416;
	                    this.expression(7);
	                    break;

	                case 13:
	                    localctx = new BitXOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 417;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 418;
	                    this.match(GameMakerLanguageParser.BitXOr);
	                    this.state = 419;
	                    this.expression(6);
	                    break;

	                case 14:
	                    localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 420;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 421;
	                    this.match(GameMakerLanguageParser.QuestionMark);
	                    this.state = 422;
	                    this.expression(0);
	                    this.state = 423;
	                    this.match(GameMakerLanguageParser.Colon);
	                    this.state = 424;
	                    this.expression(5);
	                    break;

	                case 15:
	                    localctx = new MemberIndexExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 426;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 427;
	                    this.match(GameMakerLanguageParser.OpenBracket);
	                    this.state = 429;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 939532289) !== 0)) {
	                        this.state = 428;
	                        this.accessorQualifier();
	                    }

	                    this.state = 431;
	                    this.expressionSequence();
	                    this.state = 432;
	                    this.match(GameMakerLanguageParser.CloseBracket);
	                    break;

	                case 16:
	                    localctx = new CallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GameMakerLanguageParser.RULE_expression);
	                    this.state = 434;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 435;
	                    this.arguments();
	                    break;

	                } 
	            }
	            this.state = 440;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	callStatement() {
	    let localctx = new CallStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GameMakerLanguageParser.RULE_callStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this.expression(0);
	        this.state = 442;
	        this.arguments();
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



	incDecStatement() {
	    let localctx = new IncDecStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GameMakerLanguageParser.RULE_incDecStatement);
	    try {
	        this.state = 454;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PostIncrementStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 444;
	            this.lValueExpression(0);
	            this.state = 445;
	            this.match(GameMakerLanguageParser.PlusPlus);
	            break;

	        case 2:
	            localctx = new PostDecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 447;
	            this.lValueExpression(0);
	            this.state = 448;
	            this.match(GameMakerLanguageParser.MinusMinus);
	            break;

	        case 3:
	            localctx = new PreIncrementStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 450;
	            this.match(GameMakerLanguageParser.PlusPlus);
	            this.state = 451;
	            this.lValueExpression(0);
	            break;

	        case 4:
	            localctx = new PreDecreaseStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 452;
	            this.match(GameMakerLanguageParser.MinusMinus);
	            this.state = 453;
	            this.lValueExpression(0);
	            break;

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



	accessorQualifier() {
	    let localctx = new AccessorQualifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GameMakerLanguageParser.RULE_accessorQualifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 939532289) !== 0))) {
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



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GameMakerLanguageParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.match(GameMakerLanguageParser.OpenParen);
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7734440) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 16781439) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 1921) !== 0)) {
	            this.state = 459;
	            this.argument();
	            this.state = 464;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 460;
	                    this.match(GameMakerLanguageParser.Comma);
	                    this.state = 461;
	                    this.argument(); 
	                }
	                this.state = 466;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	            }

	            this.state = 468;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 467;
	                this.match(GameMakerLanguageParser.Comma);
	            }

	        }

	        this.state = 472;
	        this.match(GameMakerLanguageParser.CloseParen);
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



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, GameMakerLanguageParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.expression(0);
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



	assignmentOperator() {
	    let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, GameMakerLanguageParser.RULE_assignmentOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===30 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 1023) !== 0))) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GameMakerLanguageParser.RULE_literal);
	    try {
	        this.state = 490;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 478;
	            this.match(GameMakerLanguageParser.UndefinedLiteral);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 479;
	            this.match(GameMakerLanguageParser.NoOneLiteral);
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 480;
	            this.match(GameMakerLanguageParser.BooleanLiteral);
	            break;
	        case 99:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 481;
	            this.match(GameMakerLanguageParser.StringLiteral);
	            break;
	        case 101:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 482;
	            this.match(GameMakerLanguageParser.VerbatimStringLiteral);
	            break;
	        case 100:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 483;
	            this.templateStringLiteral();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 484;
	            this.match(GameMakerLanguageParser.HexIntegerLiteral);
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 485;
	            this.match(GameMakerLanguageParser.BinaryLiteral);
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 486;
	            this.match(GameMakerLanguageParser.DecimalLiteral);
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 487;
	            this.match(GameMakerLanguageParser.IntegerLiteral);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 488;
	            this.arrayLiteral();
	            break;
	        case 7:
	        case 10:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 489;
	            this.structLiteral();
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



	templateStringLiteral() {
	    let localctx = new TemplateStringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, GameMakerLanguageParser.RULE_templateStringLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        this.match(GameMakerLanguageParser.TemplateStringStart);
	        this.state = 496;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===108 || _la===109) {
	            this.state = 493;
	            this.templateStringAtom();
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 499;
	        this.match(GameMakerLanguageParser.TemplateStringEnd);
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



	templateStringAtom() {
	    let localctx = new TemplateStringAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GameMakerLanguageParser.RULE_templateStringAtom);
	    try {
	        this.state = 506;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 109:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 501;
	            this.match(GameMakerLanguageParser.TemplateStringText);
	            break;
	        case 108:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 502;
	            this.match(GameMakerLanguageParser.TemplateStringStartExpression);
	            this.state = 503;
	            this.expression(0);
	            this.state = 504;
	            this.match(GameMakerLanguageParser.TemplateStringEndExpression);
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



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, GameMakerLanguageParser.RULE_arrayLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.match(GameMakerLanguageParser.OpenBracket);
	        this.state = 509;
	        this.elementList();
	        this.state = 510;
	        this.match(GameMakerLanguageParser.CloseBracket);
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



	elementList() {
	    let localctx = new ElementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, GameMakerLanguageParser.RULE_elementList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 512;
	                this.match(GameMakerLanguageParser.Comma); 
	            }
	            this.state = 517;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	        }

	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 7734440) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 16781439) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 1921) !== 0)) {
	            this.state = 518;
	            this.expression(0);
	        }

	        this.state = 529;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 522; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 521;
	                    this.match(GameMakerLanguageParser.Comma);
	                    this.state = 524; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===13);
	                this.state = 526;
	                this.expression(0); 
	            }
	            this.state = 531;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
	        }

	        this.state = 535;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 532;
	            this.match(GameMakerLanguageParser.Comma);
	            this.state = 537;
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



	structLiteral() {
	    let localctx = new StructLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, GameMakerLanguageParser.RULE_structLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.openBlock();
	        this.state = 550;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===59 || _la===91 || _la===98) {
	            this.state = 539;
	            this.propertyAssignment();
	            this.state = 544;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 540;
	                    this.match(GameMakerLanguageParser.Comma);
	                    this.state = 541;
	                    this.propertyAssignment(); 
	                }
	                this.state = 546;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
	            }

	            this.state = 548;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 547;
	                this.match(GameMakerLanguageParser.Comma);
	            }

	        }

	        this.state = 552;
	        this.closeBlock();
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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, GameMakerLanguageParser.RULE_functionDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
	        this.match(GameMakerLanguageParser.Function_);
	        this.state = 555;
	        this.identifier();
	        this.state = 556;
	        this.parameterList();
	        this.state = 557;
	        this.statement();
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



	constructorDeclaration() {
	    let localctx = new ConstructorDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, GameMakerLanguageParser.RULE_constructorDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        this.match(GameMakerLanguageParser.Function_);
	        this.state = 561;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91 || _la===98) {
	            this.state = 560;
	            this.identifier();
	        }

	        this.state = 563;
	        this.parameterList();
	        this.state = 568;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 564;
	            this.match(GameMakerLanguageParser.Colon);
	            this.state = 565;
	            this.identifier();
	            this.state = 566;
	            this.parameterList();
	        }

	        this.state = 570;
	        this.match(GameMakerLanguageParser.Constructor);
	        this.state = 571;
	        this.statement();
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



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, GameMakerLanguageParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this.match(GameMakerLanguageParser.OpenParen);
	        this.state = 585;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91 || _la===98) {
	            this.state = 574;
	            this.parameterArgument();
	            this.state = 579;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 575;
	                    this.match(GameMakerLanguageParser.Comma);
	                    this.state = 576;
	                    this.parameterArgument(); 
	                }
	                this.state = 581;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
	            }

	            this.state = 583;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 582;
	                this.match(GameMakerLanguageParser.Comma);
	            }

	        }

	        this.state = 587;
	        this.match(GameMakerLanguageParser.CloseParen);
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



	parameterArgument() {
	    let localctx = new ParameterArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, GameMakerLanguageParser.RULE_parameterArgument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 589;
	        this.identifier();
	        this.state = 592;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 590;
	            this.match(GameMakerLanguageParser.Assign);
	            this.state = 591;
	            this.expression(0);
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



	propertyAssignment() {
	    let localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, GameMakerLanguageParser.RULE_propertyAssignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        this.propertyIdentifier();
	        this.state = 595;
	        this.match(GameMakerLanguageParser.Colon);
	        this.state = 596;
	        this.expression(0);
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



	propertyIdentifier() {
	    let localctx = new PropertyIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, GameMakerLanguageParser.RULE_propertyIdentifier);
	    try {
	        this.state = 601;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 98:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 598;
	            this.match(GameMakerLanguageParser.Identifier);
	            break;
	        case 91:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 599;
	            this.softKeyword();
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 600;
	            this.propertySoftKeyword();
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, GameMakerLanguageParser.RULE_identifier);
	    try {
	        this.state = 605;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 98:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 603;
	            this.match(GameMakerLanguageParser.Identifier);
	            break;
	        case 91:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 604;
	            this.softKeyword();
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



	enumeratorDeclaration() {
	    let localctx = new EnumeratorDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, GameMakerLanguageParser.RULE_enumeratorDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 607;
	        this.match(GameMakerLanguageParser.Enum);
	        this.state = 608;
	        this.identifier();
	        this.state = 609;
	        this.openBlock();
	        this.state = 611;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91 || _la===98) {
	            this.state = 610;
	            this.enumeratorList();
	        }

	        this.state = 614;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 613;
	            this.match(GameMakerLanguageParser.Comma);
	        }

	        this.state = 616;
	        this.closeBlock();
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



	enumeratorList() {
	    let localctx = new EnumeratorListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, GameMakerLanguageParser.RULE_enumeratorList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 618;
	        this.enumerator();
	        this.state = 623;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,60,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 619;
	                this.match(GameMakerLanguageParser.Comma);
	                this.state = 620;
	                this.enumerator(); 
	            }
	            this.state = 625;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,60,this._ctx);
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



	enumerator() {
	    let localctx = new EnumeratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, GameMakerLanguageParser.RULE_enumerator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 626;
	        this.identifier();
	        this.state = 629;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 627;
	            this.match(GameMakerLanguageParser.Assign);
	            this.state = 628;
	            this.match(GameMakerLanguageParser.IntegerLiteral);
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



	macroStatement() {
	    let localctx = new MacroStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, GameMakerLanguageParser.RULE_macroStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 631;
	        this.match(GameMakerLanguageParser.Macro);
	        this.state = 632;
	        this.identifier();
	        this.state = 634; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 633;
	            this.macroToken();
	            this.state = 636; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 1610612735) !== 0) || ((((_la - 98)) & ~0x1f) === 0 && ((1 << (_la - 98)) & 3599) !== 0));
	        this.state = 638;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===103)) {
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



	defineStatement() {
	    let localctx = new DefineStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, GameMakerLanguageParser.RULE_defineStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 640;
	        this.match(GameMakerLanguageParser.Define);
	        this.state = 641;
	        this.match(GameMakerLanguageParser.RegionCharacters);
	        this.state = 642;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===106)) {
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



	regionStatement() {
	    let localctx = new RegionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, GameMakerLanguageParser.RULE_regionStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 644;
	        _la = this._input.LA(1);
	        if(!(_la===96 || _la===97)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 646;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===105) {
	            this.state = 645;
	            this.match(GameMakerLanguageParser.RegionCharacters);
	        }

	        this.state = 648;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===106)) {
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



	identifierStatement() {
	    let localctx = new IdentifierStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, GameMakerLanguageParser.RULE_identifierStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 650;
	        this.identifier();
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



	softKeyword() {
	    let localctx = new SoftKeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, GameMakerLanguageParser.RULE_softKeyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 652;
	        this.match(GameMakerLanguageParser.Constructor);
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



	propertySoftKeyword() {
	    let localctx = new PropertySoftKeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, GameMakerLanguageParser.RULE_propertySoftKeyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 654;
	        this.match(GameMakerLanguageParser.NoOneLiteral);
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



	openBlock() {
	    let localctx = new OpenBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, GameMakerLanguageParser.RULE_openBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 656;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===10)) {
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



	closeBlock() {
	    let localctx = new CloseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, GameMakerLanguageParser.RULE_closeBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 658;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===11)) {
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



	eos() {
	    let localctx = new EosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, GameMakerLanguageParser.RULE_eos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 660;
	        this.match(GameMakerLanguageParser.SemiColon);
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



	macroToken() {
	    let localctx = new MacroTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, GameMakerLanguageParser.RULE_macroToken);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 662;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967288) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 1610612735) !== 0) || ((((_la - 98)) & ~0x1f) === 0 && ((1 << (_la - 98)) & 3599) !== 0))) {
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

GameMakerLanguageParser.EOF = antlr4.Token.EOF;
GameMakerLanguageParser.MultiLineComment = 1;
GameMakerLanguageParser.SingleLineComment = 2;
GameMakerLanguageParser.OpenBracket = 3;
GameMakerLanguageParser.CloseBracket = 4;
GameMakerLanguageParser.OpenParen = 5;
GameMakerLanguageParser.CloseParen = 6;
GameMakerLanguageParser.OpenBrace = 7;
GameMakerLanguageParser.TemplateStringEndExpression = 8;
GameMakerLanguageParser.CloseBrace = 9;
GameMakerLanguageParser.Begin = 10;
GameMakerLanguageParser.End = 11;
GameMakerLanguageParser.SemiColon = 12;
GameMakerLanguageParser.Comma = 13;
GameMakerLanguageParser.Assign = 14;
GameMakerLanguageParser.Colon = 15;
GameMakerLanguageParser.Dot = 16;
GameMakerLanguageParser.PlusPlus = 17;
GameMakerLanguageParser.MinusMinus = 18;
GameMakerLanguageParser.Plus = 19;
GameMakerLanguageParser.Minus = 20;
GameMakerLanguageParser.BitNot = 21;
GameMakerLanguageParser.Not = 22;
GameMakerLanguageParser.Multiply = 23;
GameMakerLanguageParser.Divide = 24;
GameMakerLanguageParser.IntegerDivide = 25;
GameMakerLanguageParser.Modulo = 26;
GameMakerLanguageParser.Power = 27;
GameMakerLanguageParser.QuestionMark = 28;
GameMakerLanguageParser.NullCoalesce = 29;
GameMakerLanguageParser.NullCoalescingAssign = 30;
GameMakerLanguageParser.RightShiftArithmetic = 31;
GameMakerLanguageParser.LeftShiftArithmetic = 32;
GameMakerLanguageParser.LessThan = 33;
GameMakerLanguageParser.MoreThan = 34;
GameMakerLanguageParser.LessThanEquals = 35;
GameMakerLanguageParser.GreaterThanEquals = 36;
GameMakerLanguageParser.Equals_ = 37;
GameMakerLanguageParser.NotEquals = 38;
GameMakerLanguageParser.BitAnd = 39;
GameMakerLanguageParser.BitXOr = 40;
GameMakerLanguageParser.BitOr = 41;
GameMakerLanguageParser.And = 42;
GameMakerLanguageParser.Or = 43;
GameMakerLanguageParser.Xor = 44;
GameMakerLanguageParser.MultiplyAssign = 45;
GameMakerLanguageParser.DivideAssign = 46;
GameMakerLanguageParser.PlusAssign = 47;
GameMakerLanguageParser.MinusAssign = 48;
GameMakerLanguageParser.ModulusAssign = 49;
GameMakerLanguageParser.LeftShiftArithmeticAssign = 50;
GameMakerLanguageParser.RightShiftArithmeticAssign = 51;
GameMakerLanguageParser.BitAndAssign = 52;
GameMakerLanguageParser.BitXorAssign = 53;
GameMakerLanguageParser.BitOrAssign = 54;
GameMakerLanguageParser.NumberSign = 55;
GameMakerLanguageParser.DollarSign = 56;
GameMakerLanguageParser.AtSign = 57;
GameMakerLanguageParser.UndefinedLiteral = 58;
GameMakerLanguageParser.NoOneLiteral = 59;
GameMakerLanguageParser.BooleanLiteral = 60;
GameMakerLanguageParser.IntegerLiteral = 61;
GameMakerLanguageParser.DecimalLiteral = 62;
GameMakerLanguageParser.BinaryLiteral = 63;
GameMakerLanguageParser.HexIntegerLiteral = 64;
GameMakerLanguageParser.Break = 65;
GameMakerLanguageParser.Exit = 66;
GameMakerLanguageParser.Do = 67;
GameMakerLanguageParser.Case = 68;
GameMakerLanguageParser.Else = 69;
GameMakerLanguageParser.New = 70;
GameMakerLanguageParser.Var = 71;
GameMakerLanguageParser.GlobalVar = 72;
GameMakerLanguageParser.Catch = 73;
GameMakerLanguageParser.Finally = 74;
GameMakerLanguageParser.Return = 75;
GameMakerLanguageParser.Continue = 76;
GameMakerLanguageParser.For = 77;
GameMakerLanguageParser.Switch = 78;
GameMakerLanguageParser.While = 79;
GameMakerLanguageParser.Until = 80;
GameMakerLanguageParser.Repeat = 81;
GameMakerLanguageParser.Function_ = 82;
GameMakerLanguageParser.With = 83;
GameMakerLanguageParser.Default = 84;
GameMakerLanguageParser.If = 85;
GameMakerLanguageParser.Then = 86;
GameMakerLanguageParser.Throw = 87;
GameMakerLanguageParser.Delete = 88;
GameMakerLanguageParser.Try = 89;
GameMakerLanguageParser.Enum = 90;
GameMakerLanguageParser.Constructor = 91;
GameMakerLanguageParser.Static = 92;
GameMakerLanguageParser.Macro = 93;
GameMakerLanguageParser.EscapedNewLine = 94;
GameMakerLanguageParser.Define = 95;
GameMakerLanguageParser.Region = 96;
GameMakerLanguageParser.EndRegion = 97;
GameMakerLanguageParser.Identifier = 98;
GameMakerLanguageParser.StringLiteral = 99;
GameMakerLanguageParser.TemplateStringStart = 100;
GameMakerLanguageParser.VerbatimStringLiteral = 101;
GameMakerLanguageParser.WhiteSpaces = 102;
GameMakerLanguageParser.LineTerminator = 103;
GameMakerLanguageParser.UnexpectedCharacter = 104;
GameMakerLanguageParser.RegionCharacters = 105;
GameMakerLanguageParser.RegionEOL = 106;
GameMakerLanguageParser.TemplateStringEnd = 107;
GameMakerLanguageParser.TemplateStringStartExpression = 108;
GameMakerLanguageParser.TemplateStringText = 109;

GameMakerLanguageParser.RULE_program = 0;
GameMakerLanguageParser.RULE_statementList = 1;
GameMakerLanguageParser.RULE_statement = 2;
GameMakerLanguageParser.RULE_block = 3;
GameMakerLanguageParser.RULE_ifStatement = 4;
GameMakerLanguageParser.RULE_iterationStatement = 5;
GameMakerLanguageParser.RULE_withStatement = 6;
GameMakerLanguageParser.RULE_switchStatement = 7;
GameMakerLanguageParser.RULE_continueStatement = 8;
GameMakerLanguageParser.RULE_breakStatement = 9;
GameMakerLanguageParser.RULE_exitStatement = 10;
GameMakerLanguageParser.RULE_emptyStatement = 11;
GameMakerLanguageParser.RULE_caseBlock = 12;
GameMakerLanguageParser.RULE_caseClauses = 13;
GameMakerLanguageParser.RULE_caseClause = 14;
GameMakerLanguageParser.RULE_defaultClause = 15;
GameMakerLanguageParser.RULE_throwStatement = 16;
GameMakerLanguageParser.RULE_tryStatement = 17;
GameMakerLanguageParser.RULE_catchProduction = 18;
GameMakerLanguageParser.RULE_finallyProduction = 19;
GameMakerLanguageParser.RULE_returnStatement = 20;
GameMakerLanguageParser.RULE_deleteStatement = 21;
GameMakerLanguageParser.RULE_assignmentExpression = 22;
GameMakerLanguageParser.RULE_variableDeclarationList = 23;
GameMakerLanguageParser.RULE_varModifier = 24;
GameMakerLanguageParser.RULE_variableDeclaration = 25;
GameMakerLanguageParser.RULE_globalVarStatement = 26;
GameMakerLanguageParser.RULE_lValueExpression = 27;
GameMakerLanguageParser.RULE_expressionSequence = 28;
GameMakerLanguageParser.RULE_expression = 29;
GameMakerLanguageParser.RULE_callStatement = 30;
GameMakerLanguageParser.RULE_incDecStatement = 31;
GameMakerLanguageParser.RULE_accessorQualifier = 32;
GameMakerLanguageParser.RULE_arguments = 33;
GameMakerLanguageParser.RULE_argument = 34;
GameMakerLanguageParser.RULE_assignmentOperator = 35;
GameMakerLanguageParser.RULE_literal = 36;
GameMakerLanguageParser.RULE_templateStringLiteral = 37;
GameMakerLanguageParser.RULE_templateStringAtom = 38;
GameMakerLanguageParser.RULE_arrayLiteral = 39;
GameMakerLanguageParser.RULE_elementList = 40;
GameMakerLanguageParser.RULE_structLiteral = 41;
GameMakerLanguageParser.RULE_functionDeclaration = 42;
GameMakerLanguageParser.RULE_constructorDeclaration = 43;
GameMakerLanguageParser.RULE_parameterList = 44;
GameMakerLanguageParser.RULE_parameterArgument = 45;
GameMakerLanguageParser.RULE_propertyAssignment = 46;
GameMakerLanguageParser.RULE_propertyIdentifier = 47;
GameMakerLanguageParser.RULE_identifier = 48;
GameMakerLanguageParser.RULE_enumeratorDeclaration = 49;
GameMakerLanguageParser.RULE_enumeratorList = 50;
GameMakerLanguageParser.RULE_enumerator = 51;
GameMakerLanguageParser.RULE_macroStatement = 52;
GameMakerLanguageParser.RULE_defineStatement = 53;
GameMakerLanguageParser.RULE_regionStatement = 54;
GameMakerLanguageParser.RULE_identifierStatement = 55;
GameMakerLanguageParser.RULE_softKeyword = 56;
GameMakerLanguageParser.RULE_propertySoftKeyword = 57;
GameMakerLanguageParser.RULE_openBlock = 58;
GameMakerLanguageParser.RULE_closeBlock = 59;
GameMakerLanguageParser.RULE_eos = 60;
GameMakerLanguageParser.RULE_macroToken = 61;

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
        this.ruleIndex = GameMakerLanguageParser.RULE_program;
    }

	EOF() {
	    return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_statementList;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitStatementList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_statement;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	emptyStatement() {
	    return this.getTypedRuleContext(EmptyStatementContext,0);
	};

	variableDeclarationList() {
	    return this.getTypedRuleContext(VariableDeclarationListContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	iterationStatement() {
	    return this.getTypedRuleContext(IterationStatementContext,0);
	};

	continueStatement() {
	    return this.getTypedRuleContext(ContinueStatementContext,0);
	};

	breakStatement() {
	    return this.getTypedRuleContext(BreakStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	withStatement() {
	    return this.getTypedRuleContext(WithStatementContext,0);
	};

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	tryStatement() {
	    return this.getTypedRuleContext(TryStatementContext,0);
	};

	throwStatement() {
	    return this.getTypedRuleContext(ThrowStatementContext,0);
	};

	exitStatement() {
	    return this.getTypedRuleContext(ExitStatementContext,0);
	};

	macroStatement() {
	    return this.getTypedRuleContext(MacroStatementContext,0);
	};

	defineStatement() {
	    return this.getTypedRuleContext(DefineStatementContext,0);
	};

	regionStatement() {
	    return this.getTypedRuleContext(RegionStatementContext,0);
	};

	enumeratorDeclaration() {
	    return this.getTypedRuleContext(EnumeratorDeclarationContext,0);
	};

	globalVarStatement() {
	    return this.getTypedRuleContext(GlobalVarStatementContext,0);
	};

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	incDecStatement() {
	    return this.getTypedRuleContext(IncDecStatementContext,0);
	};

	callStatement() {
	    return this.getTypedRuleContext(CallStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	constructorDeclaration() {
	    return this.getTypedRuleContext(ConstructorDeclarationContext,0);
	};

	eos() {
	    return this.getTypedRuleContext(EosContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_block;
    }

	openBlock() {
	    return this.getTypedRuleContext(OpenBlockContext,0);
	};

	closeBlock() {
	    return this.getTypedRuleContext(CloseBlockContext,0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_ifStatement;
    }

	If() {
	    return this.getToken(GameMakerLanguageParser.If, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	Then() {
	    return this.getToken(GameMakerLanguageParser.Then, 0);
	};

	Else() {
	    return this.getToken(GameMakerLanguageParser.Else, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterationStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_iterationStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DoStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Do() {
	    return this.getToken(GameMakerLanguageParser.Do, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	Until() {
	    return this.getToken(GameMakerLanguageParser.Until, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitDoStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.DoStatementContext = DoStatementContext;

class WhileStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	While() {
	    return this.getToken(GameMakerLanguageParser.While, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.WhileStatementContext = WhileStatementContext;

class ForStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	For() {
	    return this.getToken(GameMakerLanguageParser.For, 0);
	};

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	SemiColon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.SemiColon);
	    } else {
	        return this.getToken(GameMakerLanguageParser.SemiColon, i);
	    }
	};


	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	variableDeclarationList() {
	    return this.getTypedRuleContext(VariableDeclarationListContext,0);
	};

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.ForStatementContext = ForStatementContext;

class RepeatStatementContext extends IterationStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Repeat() {
	    return this.getToken(GameMakerLanguageParser.Repeat, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitRepeatStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.RepeatStatementContext = RepeatStatementContext;

class WithStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_withStatement;
    }

	With() {
	    return this.getToken(GameMakerLanguageParser.With, 0);
	};

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitWithStatement(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = GameMakerLanguageParser.RULE_switchStatement;
    }

	Switch() {
	    return this.getToken(GameMakerLanguageParser.Switch, 0);
	};

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	caseBlock() {
	    return this.getTypedRuleContext(CaseBlockContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitSwitchStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContinueStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_continueStatement;
    }

	Continue() {
	    return this.getToken(GameMakerLanguageParser.Continue, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitContinueStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BreakStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_breakStatement;
    }

	Break() {
	    return this.getToken(GameMakerLanguageParser.Break, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBreakStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExitStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_exitStatement;
    }

	Exit() {
	    return this.getToken(GameMakerLanguageParser.Exit, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitExitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_emptyStatement;
    }

	SemiColon() {
	    return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEmptyStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_caseBlock;
    }

	openBlock() {
	    return this.getTypedRuleContext(OpenBlockContext,0);
	};

	closeBlock() {
	    return this.getTypedRuleContext(CloseBlockContext,0);
	};

	caseClauses = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseClausesContext);
	    } else {
	        return this.getTypedRuleContext(CaseClausesContext,i);
	    }
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCaseBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseClausesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_caseClauses;
    }

	caseClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseClauseContext);
	    } else {
	        return this.getTypedRuleContext(CaseClauseContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCaseClauses(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_caseClause;
    }

	Case() {
	    return this.getToken(GameMakerLanguageParser.Case, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCaseClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefaultClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_defaultClause;
    }

	Default() {
	    return this.getToken(GameMakerLanguageParser.Default, 0);
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitDefaultClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ThrowStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_throwStatement;
    }

	Throw() {
	    return this.getToken(GameMakerLanguageParser.Throw, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitThrowStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TryStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_tryStatement;
    }

	Try() {
	    return this.getToken(GameMakerLanguageParser.Try, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	catchProduction() {
	    return this.getTypedRuleContext(CatchProductionContext,0);
	};

	finallyProduction() {
	    return this.getTypedRuleContext(FinallyProductionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitTryStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatchProductionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_catchProduction;
    }

	Catch() {
	    return this.getToken(GameMakerLanguageParser.Catch, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCatchProduction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinallyProductionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_finallyProduction;
    }

	Finally() {
	    return this.getToken(GameMakerLanguageParser.Finally, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitFinallyProduction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_returnStatement;
    }

	Return() {
	    return this.getToken(GameMakerLanguageParser.Return, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeleteStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_deleteStatement;
    }

	Delete() {
	    return this.getToken(GameMakerLanguageParser.Delete, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitDeleteStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_assignmentExpression;
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	assignmentOperator() {
	    return this.getTypedRuleContext(AssignmentOperatorContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitAssignmentExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_variableDeclarationList;
    }

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitVariableDeclarationList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_varModifier;
    }

	Var = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Var);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Var, i);
	    }
	};


	Static() {
	    return this.getToken(GameMakerLanguageParser.Static, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitVarModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_variableDeclaration;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GlobalVarStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_globalVarStatement;
    }

	GlobalVar() {
	    return this.getToken(GameMakerLanguageParser.GlobalVar, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	SemiColon() {
	    return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitGlobalVarStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LValueExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_lValueExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MemberDotLValueContext extends LValueExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	Dot() {
	    return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMemberDotLValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.MemberDotLValueContext = MemberDotLValueContext;

class IdentifierLValueContext extends LValueExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitIdentifierLValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.IdentifierLValueContext = IdentifierLValueContext;

class MemberIndexLValueContext extends LValueExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	OpenBracket() {
	    return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	CloseBracket() {
	    return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	accessorQualifier() {
	    return this.getTypedRuleContext(AccessorQualifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMemberIndexLValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.MemberIndexLValueContext = MemberIndexLValueContext;

class ExpressionSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_expressionSequence;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitExpressionSequence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TernaryExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	QuestionMark() {
	    return this.getToken(GameMakerLanguageParser.QuestionMark, 0);
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.TernaryExpressionContext = TernaryExpressionContext;

class LogicalAndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	And() {
	    return this.getToken(GameMakerLanguageParser.And, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitLogicalAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

class LogicalOrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Or() {
	    return this.getToken(GameMakerLanguageParser.Or, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitLogicalOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

class NotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Not() {
	    return this.getToken(GameMakerLanguageParser.Not, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.NotExpressionContext = NotExpressionContext;

class FunctionExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Function_() {
	    return this.getToken(GameMakerLanguageParser.Function_, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.FunctionExpressionContext = FunctionExpressionContext;

class UnaryMinusExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Minus() {
	    return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class EqualityExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Equals_() {
	    return this.getToken(GameMakerLanguageParser.Equals_, 0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	NotEquals() {
	    return this.getToken(GameMakerLanguageParser.NotEquals, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEqualityExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.EqualityExpressionContext = EqualityExpressionContext;

class BitXOrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	BitXOr() {
	    return this.getToken(GameMakerLanguageParser.BitXOr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBitXOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.BitXOrExpressionContext = BitXOrExpressionContext;

class MultiplicativeExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(GameMakerLanguageParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(GameMakerLanguageParser.Divide, 0);
	};

	Modulo() {
	    return this.getToken(GameMakerLanguageParser.Modulo, 0);
	};

	IntegerDivide() {
	    return this.getToken(GameMakerLanguageParser.IntegerDivide, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class CallExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.CallExpressionContext = CallExpressionContext;

class PreIncDecExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
	    return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPreIncDecExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PreIncDecExpressionContext = PreIncDecExpressionContext;

class BitShiftExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LeftShiftArithmetic() {
	    return this.getToken(GameMakerLanguageParser.LeftShiftArithmetic, 0);
	};

	RightShiftArithmetic() {
	    return this.getToken(GameMakerLanguageParser.RightShiftArithmetic, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBitShiftExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.BitShiftExpressionContext = BitShiftExpressionContext;

class ParenthesizedExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class AdditiveExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Plus() {
	    return this.getToken(GameMakerLanguageParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.AdditiveExpressionContext = AdditiveExpressionContext;

class RelationalExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	LessThan() {
	    return this.getToken(GameMakerLanguageParser.LessThan, 0);
	};

	MoreThan() {
	    return this.getToken(GameMakerLanguageParser.MoreThan, 0);
	};

	LessThanEquals() {
	    return this.getToken(GameMakerLanguageParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
	    return this.getToken(GameMakerLanguageParser.GreaterThanEquals, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitRelationalExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.RelationalExpressionContext = RelationalExpressionContext;

class BitNotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BitNot() {
	    return this.getToken(GameMakerLanguageParser.BitNot, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.BitNotExpressionContext = BitNotExpressionContext;

class NewExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	New() {
	    return this.getToken(GameMakerLanguageParser.New, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitNewExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.NewExpressionContext = NewExpressionContext;

class PostIncDecExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
	    return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPostIncDecExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PostIncDecExpressionContext = PostIncDecExpressionContext;

class LiteralExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.LiteralExpressionContext = LiteralExpressionContext;

class MemberDotExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Dot() {
	    return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMemberDotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.MemberDotExpressionContext = MemberDotExpressionContext;

class MemberIndexExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OpenBracket() {
	    return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	CloseBracket() {
	    return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	accessorQualifier() {
	    return this.getTypedRuleContext(AccessorQualifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMemberIndexExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

class IdentifierExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.IdentifierExpressionContext = IdentifierExpressionContext;

class BitAndExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	BitAnd() {
	    return this.getToken(GameMakerLanguageParser.BitAnd, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.BitAndExpressionContext = BitAndExpressionContext;

class LogicalXorExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Xor() {
	    return this.getToken(GameMakerLanguageParser.Xor, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitLogicalXorExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.LogicalXorExpressionContext = LogicalXorExpressionContext;

class BitOrExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	BitOr() {
	    return this.getToken(GameMakerLanguageParser.BitOr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitBitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.BitOrExpressionContext = BitOrExpressionContext;

class CoalesceExpressionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	NullCoalesce() {
	    return this.getToken(GameMakerLanguageParser.NullCoalesce, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCoalesceExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.CoalesceExpressionContext = CoalesceExpressionContext;

class CallStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_callStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCallStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IncDecStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_incDecStatement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PreIncrementStatementContext extends IncDecStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PlusPlus() {
	    return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPreIncrementStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PreIncrementStatementContext = PreIncrementStatementContext;

class PreDecreaseStatementContext extends IncDecStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MinusMinus() {
	    return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPreDecreaseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PreDecreaseStatementContext = PreDecreaseStatementContext;

class PostDecreaseStatementContext extends IncDecStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	MinusMinus() {
	    return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPostDecreaseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PostDecreaseStatementContext = PostDecreaseStatementContext;

class PostIncrementStatementContext extends IncDecStatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lValueExpression() {
	    return this.getTypedRuleContext(LValueExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPostIncrementStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

GameMakerLanguageParser.PostIncrementStatementContext = PostIncrementStatementContext;

class AccessorQualifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_accessorQualifier;
    }

	NumberSign() {
	    return this.getToken(GameMakerLanguageParser.NumberSign, 0);
	};

	AtSign() {
	    return this.getToken(GameMakerLanguageParser.AtSign, 0);
	};

	DollarSign() {
	    return this.getToken(GameMakerLanguageParser.DollarSign, 0);
	};

	QuestionMark() {
	    return this.getToken(GameMakerLanguageParser.QuestionMark, 0);
	};

	BitOr() {
	    return this.getToken(GameMakerLanguageParser.BitOr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitAccessorQualifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_arguments;
    }

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_argument;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_assignmentOperator;
    }

	MultiplyAssign() {
	    return this.getToken(GameMakerLanguageParser.MultiplyAssign, 0);
	};

	DivideAssign() {
	    return this.getToken(GameMakerLanguageParser.DivideAssign, 0);
	};

	ModulusAssign() {
	    return this.getToken(GameMakerLanguageParser.ModulusAssign, 0);
	};

	PlusAssign() {
	    return this.getToken(GameMakerLanguageParser.PlusAssign, 0);
	};

	MinusAssign() {
	    return this.getToken(GameMakerLanguageParser.MinusAssign, 0);
	};

	LeftShiftArithmeticAssign() {
	    return this.getToken(GameMakerLanguageParser.LeftShiftArithmeticAssign, 0);
	};

	RightShiftArithmeticAssign() {
	    return this.getToken(GameMakerLanguageParser.RightShiftArithmeticAssign, 0);
	};

	BitAndAssign() {
	    return this.getToken(GameMakerLanguageParser.BitAndAssign, 0);
	};

	BitXorAssign() {
	    return this.getToken(GameMakerLanguageParser.BitXorAssign, 0);
	};

	BitOrAssign() {
	    return this.getToken(GameMakerLanguageParser.BitOrAssign, 0);
	};

	NullCoalescingAssign() {
	    return this.getToken(GameMakerLanguageParser.NullCoalescingAssign, 0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitAssignmentOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_literal;
    }

	UndefinedLiteral() {
	    return this.getToken(GameMakerLanguageParser.UndefinedLiteral, 0);
	};

	NoOneLiteral() {
	    return this.getToken(GameMakerLanguageParser.NoOneLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(GameMakerLanguageParser.BooleanLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(GameMakerLanguageParser.StringLiteral, 0);
	};

	VerbatimStringLiteral() {
	    return this.getToken(GameMakerLanguageParser.VerbatimStringLiteral, 0);
	};

	templateStringLiteral() {
	    return this.getTypedRuleContext(TemplateStringLiteralContext,0);
	};

	HexIntegerLiteral() {
	    return this.getToken(GameMakerLanguageParser.HexIntegerLiteral, 0);
	};

	BinaryLiteral() {
	    return this.getToken(GameMakerLanguageParser.BinaryLiteral, 0);
	};

	DecimalLiteral() {
	    return this.getToken(GameMakerLanguageParser.DecimalLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
	};

	structLiteral() {
	    return this.getTypedRuleContext(StructLiteralContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TemplateStringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_templateStringLiteral;
    }

	TemplateStringStart() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringStart, 0);
	};

	TemplateStringEnd() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringEnd, 0);
	};

	templateStringAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TemplateStringAtomContext);
	    } else {
	        return this.getTypedRuleContext(TemplateStringAtomContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitTemplateStringLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TemplateStringAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_templateStringAtom;
    }

	TemplateStringText() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringText, 0);
	};

	TemplateStringStartExpression() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringStartExpression, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringEndExpression, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitTemplateStringAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_arrayLiteral;
    }

	OpenBracket() {
	    return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	elementList() {
	    return this.getTypedRuleContext(ElementListContext,0);
	};

	CloseBracket() {
	    return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_elementList;
    }

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitElementList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_structLiteral;
    }

	openBlock() {
	    return this.getTypedRuleContext(OpenBlockContext,0);
	};

	closeBlock() {
	    return this.getTypedRuleContext(CloseBlockContext,0);
	};

	propertyAssignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyAssignmentContext);
	    } else {
	        return this.getTypedRuleContext(PropertyAssignmentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitStructLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_functionDeclaration;
    }

	Function_() {
	    return this.getToken(GameMakerLanguageParser.Function_, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstructorDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_constructorDeclaration;
    }

	Function_() {
	    return this.getToken(GameMakerLanguageParser.Function_, 0);
	};

	parameterList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterListContext);
	    } else {
	        return this.getTypedRuleContext(ParameterListContext,i);
	    }
	};

	Constructor() {
	    return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitConstructorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_parameterList;
    }

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	parameterArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ParameterArgumentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParameterArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_parameterArgument;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitParameterArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_propertyAssignment;
    }

	propertyIdentifier() {
	    return this.getTypedRuleContext(PropertyIdentifierContext,0);
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPropertyAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_propertyIdentifier;
    }

	Identifier() {
	    return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	softKeyword() {
	    return this.getTypedRuleContext(SoftKeywordContext,0);
	};

	propertySoftKeyword() {
	    return this.getTypedRuleContext(PropertySoftKeywordContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPropertyIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	softKeyword() {
	    return this.getTypedRuleContext(SoftKeywordContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EnumeratorDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_enumeratorDeclaration;
    }

	Enum() {
	    return this.getToken(GameMakerLanguageParser.Enum, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	openBlock() {
	    return this.getTypedRuleContext(OpenBlockContext,0);
	};

	closeBlock() {
	    return this.getTypedRuleContext(CloseBlockContext,0);
	};

	enumeratorList() {
	    return this.getTypedRuleContext(EnumeratorListContext,0);
	};

	Comma() {
	    return this.getToken(GameMakerLanguageParser.Comma, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEnumeratorDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EnumeratorListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_enumeratorList;
    }

	enumerator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumeratorContext);
	    } else {
	        return this.getTypedRuleContext(EnumeratorContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GameMakerLanguageParser.Comma);
	    } else {
	        return this.getToken(GameMakerLanguageParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEnumeratorList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EnumeratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_enumerator;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	IntegerLiteral() {
	    return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEnumerator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MacroStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_macroStatement;
    }

	Macro() {
	    return this.getToken(GameMakerLanguageParser.Macro, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	LineTerminator() {
	    return this.getToken(GameMakerLanguageParser.LineTerminator, 0);
	};

	EOF() {
	    return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	macroToken = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MacroTokenContext);
	    } else {
	        return this.getTypedRuleContext(MacroTokenContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMacroStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefineStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_defineStatement;
    }

	Define() {
	    return this.getToken(GameMakerLanguageParser.Define, 0);
	};

	RegionCharacters() {
	    return this.getToken(GameMakerLanguageParser.RegionCharacters, 0);
	};

	RegionEOL() {
	    return this.getToken(GameMakerLanguageParser.RegionEOL, 0);
	};

	EOF() {
	    return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitDefineStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RegionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_regionStatement;
    }

	Region() {
	    return this.getToken(GameMakerLanguageParser.Region, 0);
	};

	EndRegion() {
	    return this.getToken(GameMakerLanguageParser.EndRegion, 0);
	};

	RegionEOL() {
	    return this.getToken(GameMakerLanguageParser.RegionEOL, 0);
	};

	EOF() {
	    return this.getToken(GameMakerLanguageParser.EOF, 0);
	};

	RegionCharacters() {
	    return this.getToken(GameMakerLanguageParser.RegionCharacters, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitRegionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_identifierStatement;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitIdentifierStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SoftKeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_softKeyword;
    }

	Constructor() {
	    return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitSoftKeyword(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertySoftKeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_propertySoftKeyword;
    }

	NoOneLiteral() {
	    return this.getToken(GameMakerLanguageParser.NoOneLiteral, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitPropertySoftKeyword(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpenBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_openBlock;
    }

	OpenBrace() {
	    return this.getToken(GameMakerLanguageParser.OpenBrace, 0);
	};

	Begin() {
	    return this.getToken(GameMakerLanguageParser.Begin, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitOpenBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CloseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_closeBlock;
    }

	CloseBrace() {
	    return this.getToken(GameMakerLanguageParser.CloseBrace, 0);
	};

	End() {
	    return this.getToken(GameMakerLanguageParser.End, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitCloseBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_eos;
    }

	SemiColon() {
	    return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitEos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MacroTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GameMakerLanguageParser.RULE_macroToken;
    }

	EscapedNewLine() {
	    return this.getToken(GameMakerLanguageParser.EscapedNewLine, 0);
	};

	OpenBracket() {
	    return this.getToken(GameMakerLanguageParser.OpenBracket, 0);
	};

	CloseBracket() {
	    return this.getToken(GameMakerLanguageParser.CloseBracket, 0);
	};

	OpenParen() {
	    return this.getToken(GameMakerLanguageParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(GameMakerLanguageParser.CloseParen, 0);
	};

	OpenBrace() {
	    return this.getToken(GameMakerLanguageParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(GameMakerLanguageParser.CloseBrace, 0);
	};

	Begin() {
	    return this.getToken(GameMakerLanguageParser.Begin, 0);
	};

	End() {
	    return this.getToken(GameMakerLanguageParser.End, 0);
	};

	SemiColon() {
	    return this.getToken(GameMakerLanguageParser.SemiColon, 0);
	};

	Comma() {
	    return this.getToken(GameMakerLanguageParser.Comma, 0);
	};

	Assign() {
	    return this.getToken(GameMakerLanguageParser.Assign, 0);
	};

	Colon() {
	    return this.getToken(GameMakerLanguageParser.Colon, 0);
	};

	Dot() {
	    return this.getToken(GameMakerLanguageParser.Dot, 0);
	};

	PlusPlus() {
	    return this.getToken(GameMakerLanguageParser.PlusPlus, 0);
	};

	MinusMinus() {
	    return this.getToken(GameMakerLanguageParser.MinusMinus, 0);
	};

	Plus() {
	    return this.getToken(GameMakerLanguageParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(GameMakerLanguageParser.Minus, 0);
	};

	BitNot() {
	    return this.getToken(GameMakerLanguageParser.BitNot, 0);
	};

	Not() {
	    return this.getToken(GameMakerLanguageParser.Not, 0);
	};

	Multiply() {
	    return this.getToken(GameMakerLanguageParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(GameMakerLanguageParser.Divide, 0);
	};

	IntegerDivide() {
	    return this.getToken(GameMakerLanguageParser.IntegerDivide, 0);
	};

	Modulo() {
	    return this.getToken(GameMakerLanguageParser.Modulo, 0);
	};

	Power() {
	    return this.getToken(GameMakerLanguageParser.Power, 0);
	};

	QuestionMark() {
	    return this.getToken(GameMakerLanguageParser.QuestionMark, 0);
	};

	NullCoalesce() {
	    return this.getToken(GameMakerLanguageParser.NullCoalesce, 0);
	};

	NullCoalescingAssign() {
	    return this.getToken(GameMakerLanguageParser.NullCoalescingAssign, 0);
	};

	RightShiftArithmetic() {
	    return this.getToken(GameMakerLanguageParser.RightShiftArithmetic, 0);
	};

	LeftShiftArithmetic() {
	    return this.getToken(GameMakerLanguageParser.LeftShiftArithmetic, 0);
	};

	LessThan() {
	    return this.getToken(GameMakerLanguageParser.LessThan, 0);
	};

	MoreThan() {
	    return this.getToken(GameMakerLanguageParser.MoreThan, 0);
	};

	LessThanEquals() {
	    return this.getToken(GameMakerLanguageParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
	    return this.getToken(GameMakerLanguageParser.GreaterThanEquals, 0);
	};

	Equals_() {
	    return this.getToken(GameMakerLanguageParser.Equals_, 0);
	};

	NotEquals() {
	    return this.getToken(GameMakerLanguageParser.NotEquals, 0);
	};

	BitAnd() {
	    return this.getToken(GameMakerLanguageParser.BitAnd, 0);
	};

	BitXOr() {
	    return this.getToken(GameMakerLanguageParser.BitXOr, 0);
	};

	BitOr() {
	    return this.getToken(GameMakerLanguageParser.BitOr, 0);
	};

	And() {
	    return this.getToken(GameMakerLanguageParser.And, 0);
	};

	Or() {
	    return this.getToken(GameMakerLanguageParser.Or, 0);
	};

	Xor() {
	    return this.getToken(GameMakerLanguageParser.Xor, 0);
	};

	MultiplyAssign() {
	    return this.getToken(GameMakerLanguageParser.MultiplyAssign, 0);
	};

	DivideAssign() {
	    return this.getToken(GameMakerLanguageParser.DivideAssign, 0);
	};

	PlusAssign() {
	    return this.getToken(GameMakerLanguageParser.PlusAssign, 0);
	};

	MinusAssign() {
	    return this.getToken(GameMakerLanguageParser.MinusAssign, 0);
	};

	ModulusAssign() {
	    return this.getToken(GameMakerLanguageParser.ModulusAssign, 0);
	};

	LeftShiftArithmeticAssign() {
	    return this.getToken(GameMakerLanguageParser.LeftShiftArithmeticAssign, 0);
	};

	RightShiftArithmeticAssign() {
	    return this.getToken(GameMakerLanguageParser.RightShiftArithmeticAssign, 0);
	};

	BitAndAssign() {
	    return this.getToken(GameMakerLanguageParser.BitAndAssign, 0);
	};

	BitXorAssign() {
	    return this.getToken(GameMakerLanguageParser.BitXorAssign, 0);
	};

	BitOrAssign() {
	    return this.getToken(GameMakerLanguageParser.BitOrAssign, 0);
	};

	NumberSign() {
	    return this.getToken(GameMakerLanguageParser.NumberSign, 0);
	};

	DollarSign() {
	    return this.getToken(GameMakerLanguageParser.DollarSign, 0);
	};

	AtSign() {
	    return this.getToken(GameMakerLanguageParser.AtSign, 0);
	};

	UndefinedLiteral() {
	    return this.getToken(GameMakerLanguageParser.UndefinedLiteral, 0);
	};

	NoOneLiteral() {
	    return this.getToken(GameMakerLanguageParser.NoOneLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(GameMakerLanguageParser.BooleanLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(GameMakerLanguageParser.IntegerLiteral, 0);
	};

	DecimalLiteral() {
	    return this.getToken(GameMakerLanguageParser.DecimalLiteral, 0);
	};

	BinaryLiteral() {
	    return this.getToken(GameMakerLanguageParser.BinaryLiteral, 0);
	};

	HexIntegerLiteral() {
	    return this.getToken(GameMakerLanguageParser.HexIntegerLiteral, 0);
	};

	Break() {
	    return this.getToken(GameMakerLanguageParser.Break, 0);
	};

	Exit() {
	    return this.getToken(GameMakerLanguageParser.Exit, 0);
	};

	Do() {
	    return this.getToken(GameMakerLanguageParser.Do, 0);
	};

	Case() {
	    return this.getToken(GameMakerLanguageParser.Case, 0);
	};

	Else() {
	    return this.getToken(GameMakerLanguageParser.Else, 0);
	};

	New() {
	    return this.getToken(GameMakerLanguageParser.New, 0);
	};

	Var() {
	    return this.getToken(GameMakerLanguageParser.Var, 0);
	};

	GlobalVar() {
	    return this.getToken(GameMakerLanguageParser.GlobalVar, 0);
	};

	Catch() {
	    return this.getToken(GameMakerLanguageParser.Catch, 0);
	};

	Finally() {
	    return this.getToken(GameMakerLanguageParser.Finally, 0);
	};

	Return() {
	    return this.getToken(GameMakerLanguageParser.Return, 0);
	};

	Continue() {
	    return this.getToken(GameMakerLanguageParser.Continue, 0);
	};

	For() {
	    return this.getToken(GameMakerLanguageParser.For, 0);
	};

	Switch() {
	    return this.getToken(GameMakerLanguageParser.Switch, 0);
	};

	While() {
	    return this.getToken(GameMakerLanguageParser.While, 0);
	};

	Until() {
	    return this.getToken(GameMakerLanguageParser.Until, 0);
	};

	Repeat() {
	    return this.getToken(GameMakerLanguageParser.Repeat, 0);
	};

	Function_() {
	    return this.getToken(GameMakerLanguageParser.Function_, 0);
	};

	With() {
	    return this.getToken(GameMakerLanguageParser.With, 0);
	};

	Default() {
	    return this.getToken(GameMakerLanguageParser.Default, 0);
	};

	If() {
	    return this.getToken(GameMakerLanguageParser.If, 0);
	};

	Then() {
	    return this.getToken(GameMakerLanguageParser.Then, 0);
	};

	Throw() {
	    return this.getToken(GameMakerLanguageParser.Throw, 0);
	};

	Delete() {
	    return this.getToken(GameMakerLanguageParser.Delete, 0);
	};

	Try() {
	    return this.getToken(GameMakerLanguageParser.Try, 0);
	};

	Enum() {
	    return this.getToken(GameMakerLanguageParser.Enum, 0);
	};

	Constructor() {
	    return this.getToken(GameMakerLanguageParser.Constructor, 0);
	};

	Static() {
	    return this.getToken(GameMakerLanguageParser.Static, 0);
	};

	Identifier() {
	    return this.getToken(GameMakerLanguageParser.Identifier, 0);
	};

	StringLiteral() {
	    return this.getToken(GameMakerLanguageParser.StringLiteral, 0);
	};

	VerbatimStringLiteral() {
	    return this.getToken(GameMakerLanguageParser.VerbatimStringLiteral, 0);
	};

	TemplateStringStart() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringStart, 0);
	};

	TemplateStringEnd() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringEnd, 0);
	};

	TemplateStringText() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringText, 0);
	};

	TemplateStringStartExpression() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringStartExpression, 0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(GameMakerLanguageParser.TemplateStringEndExpression, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof GameMakerLanguageParserVisitor ) {
	        return visitor.visitMacroToken(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GameMakerLanguageParser.ProgramContext = ProgramContext; 
GameMakerLanguageParser.StatementListContext = StatementListContext; 
GameMakerLanguageParser.StatementContext = StatementContext; 
GameMakerLanguageParser.BlockContext = BlockContext; 
GameMakerLanguageParser.IfStatementContext = IfStatementContext; 
GameMakerLanguageParser.IterationStatementContext = IterationStatementContext; 
GameMakerLanguageParser.WithStatementContext = WithStatementContext; 
GameMakerLanguageParser.SwitchStatementContext = SwitchStatementContext; 
GameMakerLanguageParser.ContinueStatementContext = ContinueStatementContext; 
GameMakerLanguageParser.BreakStatementContext = BreakStatementContext; 
GameMakerLanguageParser.ExitStatementContext = ExitStatementContext; 
GameMakerLanguageParser.EmptyStatementContext = EmptyStatementContext; 
GameMakerLanguageParser.CaseBlockContext = CaseBlockContext; 
GameMakerLanguageParser.CaseClausesContext = CaseClausesContext; 
GameMakerLanguageParser.CaseClauseContext = CaseClauseContext; 
GameMakerLanguageParser.DefaultClauseContext = DefaultClauseContext; 
GameMakerLanguageParser.ThrowStatementContext = ThrowStatementContext; 
GameMakerLanguageParser.TryStatementContext = TryStatementContext; 
GameMakerLanguageParser.CatchProductionContext = CatchProductionContext; 
GameMakerLanguageParser.FinallyProductionContext = FinallyProductionContext; 
GameMakerLanguageParser.ReturnStatementContext = ReturnStatementContext; 
GameMakerLanguageParser.DeleteStatementContext = DeleteStatementContext; 
GameMakerLanguageParser.AssignmentExpressionContext = AssignmentExpressionContext; 
GameMakerLanguageParser.VariableDeclarationListContext = VariableDeclarationListContext; 
GameMakerLanguageParser.VarModifierContext = VarModifierContext; 
GameMakerLanguageParser.VariableDeclarationContext = VariableDeclarationContext; 
GameMakerLanguageParser.GlobalVarStatementContext = GlobalVarStatementContext; 
GameMakerLanguageParser.LValueExpressionContext = LValueExpressionContext; 
GameMakerLanguageParser.ExpressionSequenceContext = ExpressionSequenceContext; 
GameMakerLanguageParser.ExpressionContext = ExpressionContext; 
GameMakerLanguageParser.CallStatementContext = CallStatementContext; 
GameMakerLanguageParser.IncDecStatementContext = IncDecStatementContext; 
GameMakerLanguageParser.AccessorQualifierContext = AccessorQualifierContext; 
GameMakerLanguageParser.ArgumentsContext = ArgumentsContext; 
GameMakerLanguageParser.ArgumentContext = ArgumentContext; 
GameMakerLanguageParser.AssignmentOperatorContext = AssignmentOperatorContext; 
GameMakerLanguageParser.LiteralContext = LiteralContext; 
GameMakerLanguageParser.TemplateStringLiteralContext = TemplateStringLiteralContext; 
GameMakerLanguageParser.TemplateStringAtomContext = TemplateStringAtomContext; 
GameMakerLanguageParser.ArrayLiteralContext = ArrayLiteralContext; 
GameMakerLanguageParser.ElementListContext = ElementListContext; 
GameMakerLanguageParser.StructLiteralContext = StructLiteralContext; 
GameMakerLanguageParser.FunctionDeclarationContext = FunctionDeclarationContext; 
GameMakerLanguageParser.ConstructorDeclarationContext = ConstructorDeclarationContext; 
GameMakerLanguageParser.ParameterListContext = ParameterListContext; 
GameMakerLanguageParser.ParameterArgumentContext = ParameterArgumentContext; 
GameMakerLanguageParser.PropertyAssignmentContext = PropertyAssignmentContext; 
GameMakerLanguageParser.PropertyIdentifierContext = PropertyIdentifierContext; 
GameMakerLanguageParser.IdentifierContext = IdentifierContext; 
GameMakerLanguageParser.EnumeratorDeclarationContext = EnumeratorDeclarationContext; 
GameMakerLanguageParser.EnumeratorListContext = EnumeratorListContext; 
GameMakerLanguageParser.EnumeratorContext = EnumeratorContext; 
GameMakerLanguageParser.MacroStatementContext = MacroStatementContext; 
GameMakerLanguageParser.DefineStatementContext = DefineStatementContext; 
GameMakerLanguageParser.RegionStatementContext = RegionStatementContext; 
GameMakerLanguageParser.IdentifierStatementContext = IdentifierStatementContext; 
GameMakerLanguageParser.SoftKeywordContext = SoftKeywordContext; 
GameMakerLanguageParser.PropertySoftKeywordContext = PropertySoftKeywordContext; 
GameMakerLanguageParser.OpenBlockContext = OpenBlockContext; 
GameMakerLanguageParser.CloseBlockContext = CloseBlockContext; 
GameMakerLanguageParser.EosContext = EosContext; 
GameMakerLanguageParser.MacroTokenContext = MacroTokenContext; 
