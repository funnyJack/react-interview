import { Modal, Table } from "antd";
import { useEffect, useState } from "react";

const People = () => {
    const [data, setData] = useState([]);
    const [person, setPerson] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: "姓名",
            dataIndex: "name",
            render: (text, record) => (
                <a onClick={() => getPerson(record.url)}>
                    {text}
                </a>
            )
        },
        {
            title: "性别",
            dataIndex: "gender"
        },
        {
            title: "身高",
            dataIndex: "height"
        },
        {
            title: "出生年份",
            dataIndex: "birth_year"
        }
    ]

    const search = async () => {
        const response = await fetch("https://swapi.info/api/people")
        const result = await response.json();
        setData(result)
    }

    const getPerson = async (url) => {
        const response = await fetch(url)
        const result = await response.json();
        setPerson(result)
        setIsModalOpen(true);
    }

    useEffect(() => { search() }, [])
    return <div>
        <Table rowKey={'name'} columns={columns} dataSource={data} />
        <Modal
            title="人物详情"
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            onOk={() => setIsModalOpen(false)}
        >
            <p>姓名: {person.name}</p>
            <p>性别: {person.gender}</p>
            <p>身高: {person.height}</p>
            <p>出生年份: {person.birth_year}</p>
            <p>头发颜色: {person.hair_color}</p>
            <p>皮肤颜色: {person.skin_color}</p>
        </Modal>
    </div>
}

export default People;