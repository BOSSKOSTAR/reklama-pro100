// Функция регистрации
async function registerUser(email, password, name) {
    const client = window.supabaseClient;
    if (!client) {
        alert('Ошибка: База данных Supabase не инициализирована!');
        return;
    }

    const { data, error } = await client.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert('Ошибка регистрации: ' + error.message);
        return;
    }

    if (data.user) {
        alert('Успешно! Пользователь зарегистрирован в Supabase.');
    }
}

// Функция входа
async function loginUser(email, password) {
    const client = window.supabaseClient;
    if (!client) return;

    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert('Ошибка входа: ' + error.message);
        return;
    }

    if (data.user) {
        alert('Вы успешно вошли через Supabase!');
    }
}