const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function Ichha() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/SourceFile'>/SourceFile</a></td>
            <td style={tableCellStyle}><a href='/SourceFile'>Source file</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SourceFile1'>/SourceFile1</a></td>
            <td style={tableCellStyle}><a href='/SourceFile1'>Source file</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SourceFile2'>/SourceFile2</a></td>
            <td style={tableCellStyle}><a href='/SourceFile2'>Source file</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SourceFile3'>/SourceFile3</a></td>
            <td style={tableCellStyle}><a href='/SourceFile3'>Source file</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SourceFile4'>/SourceFile4</a></td>
            <td style={tableCellStyle}><a href='/SourceFile4'>Source file</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}