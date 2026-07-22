const supabaseUrl = 'https://supabase.co';
const supabaseKey = 'sb_publishable_8lh0pIQKFqHJul0SGvER0w__SY9r6Gm';

// Проверяем, что библиотека загрузилась, и инициализируем базу
if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.error('Ошибка: библиотека Supabase не подключена в index.html!');
}