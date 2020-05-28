function createTable()
{
    var rows = document.getElementById('rows').value;
    var cols = document.getElementById('cols').value;
    var theader = '<table border="1">\n';
    var tbody = '';

    for( var i=1; i <= rows;i++)
    {
        tbody += '<tr>';
        for( var j=1; j <= cols;j++)
        {
            tbody += '<td>';
            tbody +=  i + ' , ' + j;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrap').innerHTML = theader + tbody + tfooter;
}
function reloadFunction() {
 location.reload();
}