import styles from './UniversityLife.module.css'

// const GROUP_IDS = ["20442308", "38013538"];
// const ACCESS_TOKEN = "vk1.a.vaop5FYs9ey53z2c1l_aHNCzqIFQlrEy4G-h2G8FWw5uU6qQa1q7Ts92rw9sYgJeIdcyxkq2OabmCGSESjntqPS99TFL9xNZBRHrOL6Wrg-UbkKiiqOBvrR_dEaMOJS6tz6bXCg8mvge1WkzQqnT1BRcTllZhlesrzRIrJSZVxCNP7GyrUgVXp_WjWn9omH5hocSURCGUpEFfwEufcvubg"; // Вставь свой токен
// const POST_COUNT = 2;
// const UPDATE_INTERVAL = 30000; // 30 секунд

export default function UniversityLife() {
    // const [posts, setPosts] = useState([]);

    // // Функция загрузки постов из VK API
    // const fetchPosts = async () => {
    //     try {
    //         const responses = await Promise.all(
    //           GROUP_IDS.map((id) => {
    //             const url = `https://api.vk.com/method/wall.get`;
    //             const params = {
    //               owner_id: `-${id}`,
    //               count: POST_COUNT,
    //               access_token: ACCESS_TOKEN,
    //               v: "5.199", //5.131
    //             };
    //             console.log(`Запрос к VK API: ${url} с параметрами:`, params); // Логируем запрос
        
    //             return axios.get(url, { params });
    //           })
    //         );
        
    //         // Объединяем посты из двух сообществ
    //         const allPosts = responses.flatMap((res) => res.data.response.items);
    //         setPosts(allPosts);
    //       } catch (error) {
    //         console.error("Ошибка при загрузке постов:", error);
    //         console.error("Детали ошибки:", error.message, error.response); // Логируем детали ошибки
    //       }
    // };
  
    // useEffect(() => {
    //   fetchPosts(); // Загружаем посты при монтировании
    //   const interval = setInterval(fetchPosts, UPDATE_INTERVAL); // Автообновление
    //   return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <h1 className={styles.title}>ЖИЗНЬ ВУЗА</h1>
            <div className={styles.background}>
                {/* {/* {posts.map((post) => (
                    <div
                        key={post.id}
                        style={{
                            width: "447px",
                            height: "505px",
                            border: "1px solid #ccc",
                            padding: "10px",
                            overflow: "hidden",
                            background: "#fff",
                        }}
                    >
                        <p>{post.text}</p>
                        {post.attachments?.[0]?.photo && (
                            <img
                                src={post.attachments[0].photo.sizes.pop().url}
                                alt="Post"
                                style={{ width: "100%", height: "auto" }}
                            />
                        )}
                    </div>
                ))}
                <div id="vk_post_-20442308_23162"></div>
                <script type="text/javascript" src="https://vk.com/js/api/openapi.js?173"></script>
                <script type="text/javascript">
                    (function() {
                        VK.Widgets.Post("vk_post_-20442308_23162", -20442308, 23162, '7j2_e6gFZe_EGS_GNG4umTqA0JG0')}());
                </script> */}
            </div>
        </>
    )
}