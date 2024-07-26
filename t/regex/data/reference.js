export default[{"\u006e\u0061\u006d\u0065":"\u666e\u901a\u5b57\u7b26","\u0063\u006f\u006e\u0074\u0065\u006e\u0074":[{"\u0063\u006f\u0064\u0065":"\u0078\u007c\u0079","\u0064\u0065\u0073\u0063":'匹配x或y。例如，\x27z|food\x27能匹配\x22z\x22或\x22food\x22。\x27(z|f)ood\x27则匹配\x22zood\x22或\x22food\x22。'},{"\u0063\u006f\u0064\u0065":"\u005b\u0041\u0042\u0043\u005d","\u0064\u0065\u0073\u0063":'匹配[...]中的所有字符，例如[aeiou]匹配字符串\x22googlerunoobtaobao\x22中所有的eoua字母。'},{'code':'[^ABC]',"\u0064\u0065\u0073\u0063":'匹配除了[...]中字符的所有字符，例如[^aeiou]匹配字符串\x22googlerunoobtaobao\x22中除了eoua字母的所有字符。'},{'code':'[A-Z]','desc':'[A-Z]表示一个区间，匹配所有大写字母，[a-z]表示所有小写字母。'},{'code':"\u002e",'desc':'匹配除换行符（\x5cn、\x5cr）之外的任何单个字符，相等于[^\x5cn\x5cr]。'},{"\u0063\u006f\u0064\u0065":'[\x5cs\x5cS]','desc':'匹配所有。\x5cs是匹配所有空白符，包括换行，\x5cS非空白符，不包括换行。'},{'code':'\x5cw',"\u0064\u0065\u0073\u0063":"\u5339\u914d\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u3002\u7b49\u4ef7\u4e8e\u005b\u0041\u002d\u005a\u0061\u002d\u007a\u0030\u002d\u0039\u005f\u005d"},{"\u0063\u006f\u0064\u0065":'\x5cW','desc':'匹配非字母、数字、下划线。等价于\x27[^A-Za-z0-9_]\x27。'},{"\u0063\u006f\u0064\u0065":'\x5cd','desc':'匹配任意一个阿拉伯数字（0到9）。等价于[0-9]'},{"\u0063\u006f\u0064\u0065":'\x5cD','desc':'匹配一个非数字字符。等价于[^0-9]。'}]},{'name':'非打印字符','content':[{'code':'\x5ccx',"\u0064\u0065\u0073\u0063":'匹配由x指明的控制字符。例如，\x5ccM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的\x27c\x27字符。'},{"\u0063\u006f\u0064\u0065":'\x5cf',"\u0064\u0065\u0073\u0063":'匹配一个换页符。等价于\x5cx0c和\x5ccL。'},{'code':'\x5cn',"\u0064\u0065\u0073\u0063":'匹配一个换行符。等价于\x5cx0a和\x5ccJ。'},{'code':'\x5cr',"\u0064\u0065\u0073\u0063":'匹配一个回车符。等价于\x5cx0d和\x5ccM。'},{"\u0063\u006f\u0064\u0065":'\x5cs',"\u0064\u0065\u0073\u0063":'匹配任何空白字符，包括空格、制表符、换页符等等。等价于[\x5cf\x5cn\x5cr\x5ct\x5cv]。注意Unicode正则表达式会匹配全角空格符。'},{"\u0063\u006f\u0064\u0065":'\x5cS',"\u0064\u0065\u0073\u0063":'匹配任何非空白字符。等价于[^\x5cf\x5cn\x5cr\x5ct\x5cv]。'},{"\u0063\u006f\u0064\u0065":'\x5ct','desc':'匹配一个制表符。等价于\x5cx09和\x5ccI。'},{'code':'\x5cv','desc':'匹配一个垂直制表符。等价于\x5cx0b和\x5ccK。'}]},{"\u006e\u0061\u006d\u0065":"\u7279\u6b8a\u5b57\u7b26","\u0063\u006f\u006e\u0074\u0065\u006e\u0074":[{'code':'$','desc':'匹配输入字符串的结尾位置。如果设置了RegExp对象的Multiline属性，则$也匹配\x27\x5cn\x27或\x27\x5cr\x27。要匹配$字符本身，请使用\x5c$。'},{'code':'()','desc':'标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用\x5c(和\x5c)。'},{'code':'*',"\u0064\u0065\u0073\u0063":'匹配前面的子表达式零次或多次。要匹配*字符，请使用\x5c*。'},{"\u0063\u006f\u0064\u0065":"\u002b",'desc':'匹配前面的子表达式一次或多次。要匹配+字符，请使用\x5c+。'},{'code':'.','desc':'匹配除换行符\x5cn之外的任何单字符。要匹配.，请使用\x5c.。'},{"\u0063\u006f\u0064\u0065":'[','desc':'标记一个中括号表达式的开始。要匹配[，请使用\x5c[。'},{'code':"\u003f","\u0064\u0065\u0073\u0063":'匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配?字符，请使用\x5c?。'},{'code':'\x5c','desc':'将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如，\x27n\x27匹配字符\x27n\x27。\x27\x5cn\x27匹配换行符。序列\x27\x5c\x5c\x27匹配\x22\x5c\x22，而\x27\x5c(\x27则匹配\x22(\x22。'},{'code':'^',"\u0064\u0065\u0073\u0063":'匹配输入字符串的开始位置，除非在方括号表达式中使用，当该符号在方括号表达式中使用时，表示不接受该方括号表达式中的字符集合。要匹配^字符本身，请使用\x5c^。'},{'code':"\u007b","\u0064\u0065\u0073\u0063":'标记限定符表达式的开始。要匹配{，请使用\x5c{。'},{"\u0063\u006f\u0064\u0065":"\u007c","\u0064\u0065\u0073\u0063":'指明两项之间的一个选择。要匹配|，请使用\x5c|。'}]},{"\u006e\u0061\u006d\u0065":"\u9650\u5b9a\u7b26","\u0063\u006f\u006e\u0074\u0065\u006e\u0074":[{"\u0063\u006f\u0064\u0065":'*','desc':'匹配前面的子表达式零次或多次。例如，zo*能匹配\x22z\x22以及\x22zoo\x22。*等价于{0,}。'},{"\u0063\u006f\u0064\u0065":"\u002b","\u0064\u0065\u0073\u0063":'匹配前面的子表达式一次或多次。例如，zo+能匹配\x22zo\x22以及\x22zoo\x22，但不能匹配\x22z\x22。+等价于{1,}。'},{"\u0063\u006f\u0064\u0065":"\u003f",'desc':'匹配前面的子表达式零次或一次。例如，do(es)?可以匹配\x22do\x22、\x22does\x22、\x22doxy\x22中的\x22do\x22和\x22does\x22。?等价于{0,1}。'},{'code':"\u003f",'desc':'当该字符紧跟在任何一个其他限制符(*,+,?,{n},{n,},{n,m})后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串\x22oooo\x22，\x27o+?\x27将匹配单个\x22o\x22，而\x27o+\x27将匹配所有\x27o\x27。'},{'code':'{n}',"\u0064\u0065\u0073\u0063":'n是一个非负整数。匹配确定的n次。例如，o{2}不能匹配\x22Bob\x22中的o，但是能匹配\x22food\x22中的两个o。'},{'code':"\u007b\u006e\u002c\u007d","\u0064\u0065\u0073\u0063":'n是一个非负整数。至少匹配n次。例如，o{2,}不能匹配\x22Bob\x22中的o，但能匹配\x22foooood\x22中的所有o。o{1,}等价于o+。o{0,}则等价于o*。'},{'code':'{n,m}',"\u0064\u0065\u0073\u0063":'m和n均为非负整数，其中n<=m。最少匹配n次且最多匹配m次。例如，o{1,3}将匹配\x22fooooood\x22中的前三个o。o{0,1}等价于o?。请注意在逗号和两个数之间不能有空格。'}]},{'name':"\u5b9a\u4f4d\u7b26",'content':[{'code':'^',"\u0064\u0065\u0073\u0063":'匹配输入字符串开始的位置。如果设置了RegExp对象的Multiline属性，^还会与\x5cn或\x5cr之后的位置匹配。'},{'code':'$','desc':'匹配输入字符串结尾的位置。如果设置了RegExp对象的Multiline属性，$还会与\x5cn或\x5cr之前的位置匹配。'},{'code':'\x5cb','desc':'匹配一个单词边界，即字与空格间的位置。'},{'code':'\x5cB','desc':'非单词边界匹配。'}]},{"\u006e\u0061\u006d\u0065":'修饰符','content':[{'code':'i','desc':"\u5c06\u5339\u914d\u8bbe\u7f6e\u4e3a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u641c\u7d22\u65f6\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u003a\u0041\u548c\u0061\u6ca1\u6709\u533a\u522b\u3002"},{'code':'g','desc':'查找所有的匹配项。'},{'code':'m','desc':'使边界字符^和$匹配每一行的开头和结尾，记住是多行，而不是整个字符串的开头和结尾。'},{'code':'s','desc':'默认情况下的圆点.是匹配除换行符\x5cn之外的任何字符，加上s修饰符之后,.中包含换行符\x5cn。'}]},{'name':'其他元字符','content':[{'code':'(pattern)','desc':'匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到，在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用\x27\x5c(\x27或\x27\x5c)\x27。'},{'code':'(?:pattern)',"\u0064\u0065\u0073\u0063":'匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用\x22或\x22字符(|)来组合一个模式的各个部分是很有用。例如，\x27industr(?:y|ies)就是一个比\x27industry|industries\x27更简略的表达式。'},{'code':'(?=pattern)','desc':'正向肯定预查（lookaheadpositiveassert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，\x22Windows(?=95|98|NT|2000)\x22能匹配\x22Windows2000\x22中的\x22Windows\x22，但不能匹配\x22Windows3.1\x22中的\x22Windows\x22。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。'},{'code':'(?!pattern)','desc':'正向否定预查(negativeassert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如\x22Windows(?!95|98|NT|2000)\x22能匹配\x22Windows3.1\x22中的\x22Windows\x22，但不能匹配\x22Windows2000\x22中的\x22Windows\x22。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。'},{'code':'(?<=pattern)','desc':'反向(lookbehind)肯定预查，与正向肯定预查类似，只是方向相反。例如，\x22(?<=95|98|NT|2000)Windows\x22能匹配\x222000Windows\x22中的\x22Windows\x22，但不能匹配\x223.1Windows\x22中的\x22Windows\x22。'},{'code':"\u0028\u003f\u003c\u0021\u0070\u0061\u0074\u0074\u0065\u0072\u006e\u0029",'desc':'反向否定预查，与正向否定预查类似，只是方向相反。例如\x22(?<!95|98|NT|2000)Windows\x22能匹配\x223.1Windows\x22中的\x22Windows\x22，但不能匹配\x222000Windows\x22中的\x22Windows\x22。'},{'code':'\x5cxn','desc':'匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，\x27\x5cx41\x27匹配\x22A\x22。\x27\x5cx041\x27则等价于\x27\x5cx04\x27&\x221\x22。正则表达式中可以使用ASCII编码。'},{'code':'\x5cnum','desc':'匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，\x27(.)\x5c1\x27匹配两个连续的相同字符。'},{'code':'\x5cun','desc':'匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\x5cu00A9匹配版权符号(?)。'}]}];