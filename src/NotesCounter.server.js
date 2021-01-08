import {db} from './db.server';

export const NotesCounter = () => {
  const counter = db.query(`select * from notes`);

  return (
    <p
      style={{
        padding: '16px',
      }}>
      {`notes records in database: ${counter.rows.length}`}
    </p>
  );
};
