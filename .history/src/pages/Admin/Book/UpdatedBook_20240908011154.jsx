import {
    List,
    Datagrid,
    SimpleForm,
    TextField,
    TextInput,
    DateInput,
    DateField,
    required,
} from 'react-admin';
import { EditDialog } from '@react-admin/ra-form-layout';

const Update = () => (
    <>
        <List>
            <Datagrid rowClick="edit">
                ...
            </Datagrid>
        </List>
        <EditDialog>
            <SimpleForm>
                <TextInput source="bookName" validate={required()} />
                <TextInput source="author" validate={required()} />
                <TextInput source="publisher" validate={required()} />
                <TextInput source="bookPrice" validate={required()} />
                <TextInput source="bookDescription" validate={required()} />
                <TextInput source="picture" validate={required()} />
                <TextInput source="readCount" validate={required()} />
                <TextInput source="star" validate={required()} />
                <DateInput source="createdAt" />
            </SimpleForm>
        </EditDialog>
    </>
);