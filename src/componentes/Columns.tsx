import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Colums: GridColDef[] = [
    { field: 'dom', headerName: 'Dom', type: 'number', width: 50, },
    { field: 'seg', headerName: 'Seg', type: 'number', width: 50 },
    { field: 'ter', headerName: 'Ter', type: 'number', width: 50 },
    {field: 'qua', headerName: 'Qua', type: 'number', width: 50,},
    { field: 'qui', headerName: 'Qui', type: 'number', width: 50 },
    { field: 'sex', headerName: 'Sex', type: 'number', width: 50 },
    {field: 'sab', headerName: 'Sab', type: 'number', width: 50,},

];
const rows = [
    { dom: 26, seg: 27, ter: 28, qua: 29, qui: 30, sex: 1, sab: 2 },
    { dom: 3, seg: 4, ter: 5, qua: 6, qui: 7, sex: 8, sab: 9 },
    { dom: 10, seg: 11, ter: 12, qua: 13, qui: 14, sex: 15, sab: 16 },
    { dom: 17, seg: 27, ter: 18, qua: 19, qui: 20, sex: 21, sab: 22 },
    { dom: 23, seg: 24, ter: 25, qua: 26, qui: 27, sex: 28, sab: 29 },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={Colums}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection />
        </div>
    );
}
