import supabase from '../../utils/supabase';

export async function fetchData() {
    const { data: collections, error } = await supabase
      .from('collections')
      .select('*');
  
    if (error) {
      console.error('Error fetching data:', error.message);
      return { error: error.message };
    }
  
    return { collections };
  }

  export async function fetchById(id) {
    const { data: collections, error } = await supabase
      .from('collections')
      .select('*')
      .eq('id', id)
  
    if (error) {
      console.error('Error fetching data:', error.message);
      return { error: error.message };
    }
  
    return { collections };
  }

/**
 * Inserts a new record into the 'collections' table.
 * @param {Object} newRecord - Data to insert.
 * @returns {Promise<Object>} - Inserted data or error.
 */
export async function insertData(newRecord) {
  try {
    const { data, error } = await supabase
      .from('collections')
      .insert([newRecord])
      .select();

    if (error) throw new Error(error.message);

    return { data };

  } catch (error) {
    console.error('Insert error:', error);
    return { error: error.message };
  }
}
