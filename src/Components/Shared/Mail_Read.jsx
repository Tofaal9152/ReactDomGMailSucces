import React from "react";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate =useNavigate();
  return (
    <div className=" w-full p-[1%]">
      {/* Upper Icon */}
      <div className="flex justify-between">
        <div className="flex space-x-7 ">
          <div className="flex">
            <IoMdArrowBack
              onClick={() => navigate("/")}
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
          </div>
          <div className="flex space-x-6">
            <BiArchiveIn
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <MdOutlineReport
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <MdDeleteOutline
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <div className="border-l-[1px] h-[1.9rem]"></div>
          </div>
          <div className="flex space-x-6">
            <MdOutlineMarkEmailUnread
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <MdOutlineWatchLater
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <MdOutlineAddTask
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <div className="border-l-[1px] h-[1.9rem]"></div>
          </div>
          <div className="flex space-x-6">
            <MdOutlineDriveFileMove
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
            <IoMdMore
              className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
              size={38}
            />
          </div>
        </div>

        <div className="flex">
          <MdKeyboardArrowLeft
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
            size={38}
          />
          <MdKeyboardArrowRight
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 duration-300"
            size={38}
          />
        </div>
      </div>
      {/* Show Mail Messages */}
      <div className="h-full space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl">Subject</h1>
            <p className="bg-gray-200 py-1 px-2 rounded-xl">Inbox</p>
          </div>
          <div className="time">12:23:23</div>
        </div>
        <div className="text-xs text-gray-500">
          <p>tofaal91522@gmail.com</p>
          <p>to me</p>
        </div>
        <div className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          praesentium blanditiis provident repellendus exercitationem unde
          adipisci illum alias, quos quod esse expedita repudiandae. Corrupti
          cupiditate quas praesentium fugit obcaecati modi officiis tempore in
          itaque quo qui, enim, eveniet incidunt culpa laborum suscipit voluptas
          quisquam ex id, tempora eos architecto nihil quia. Quos tempore et aut
          debitis saepe vero molestiae quasi nisi, illo nobis cum recusandae
          maiores doloremque eos dolore molestias! Quam consequuntur laudantium,
          maiores, delectus autem in aperiam voluptas et quaerat ut assumenda
          cupiditate dolorem deleniti aspernatur maxime quo ullam possimus
          beatae ex laborum voluptatum reiciendis! Qui laborum dignissimos
          libero esse quia eum nemo magnam. Magni eligendi eum ipsam
          reprehenderit eveniet animi a minus et tempora quae dignissimos
          consequatur molestiae, nostrum maiores quo doloribus veniam laboriosam
          earum, soluta qui delectus porro. Quasi ullam qui iure repudiandae
          nobis! Minus voluptate exercitationem, voluptatem, aliquam sequi
          voluptates itaque quo facere tempora repellat earum alias illo, iusto
          doloremque! Odit omnis provident consequatur unde reiciendis esse.
          Accusantium necessitatibus incidunt aspernatur voluptates voluptate
          ratione, cumque illum quam doloremque commodi veniam deleniti omnis,
          voluptatem, dignissimos architecto perspiciatis dolorum esse ducimus
          molestias consequuntur repellat provident reprehenderit impedit.
          Incidunt ducimus blanditiis quo sequi provident facilis voluptatum a
          temporibus saepe aspernatur voluptas eius necessitatibus, perferendis
          atque eligendi sunt voluptate nihil sed omnis. Nesciunt tempora,
          sapiente unde quibusdam molestias cum delectus qui saepe assumenda
          amet voluptatem hic veritatis nihil modi exercitationem in culpa
          repellendus. Adipisci voluptate, maxime iusto voluptas minus nulla
          pariatur eveniet sit, rerum illum ut molestiae enim cum. Repellat,
          porro mollitia excepturi dolorum magni numquam debitis! Blanditiis
          velit, delectus accusamus autem aut officia eveniet vitae, nostrum
          reprehenderit veritatis odit exercitationem officiis culpa, harum
          recusandae ab rerum labore voluptates ipsa commodi? Adipisci tenetur
          doloribus nesciunt ea animi possimus error quas mollitia, nostrum
          exercitationem dicta repellat aut qui veniam, delectus numquam ipsum
          laborum maxime ipsam architecto. Natus aperiam aliquid ex molestiae
          consectetur, nostrum sequi et iure nesciunt nemo provident expedita
          nobis mollitia! Eos, ex. Deleniti in cumque blanditiis! Debitis, non
          porro maiores autem impedit voluptatum vitae nemo distinctio nam,
          quia, sint aliquam id necessitatibus expedita fuga perferendis magni
          veritatis asperiores pariatur. Voluptatem ratione libero pariatur
          optio asperiores inventore voluptates iste, adipisci voluptas magnam
          sequi autem possimus et odio saepe deleniti qui voluptatibus cumque
          architecto, labore unde fuga. Culpa aliquid animi corporis ex, ad
          provident accusamus officiis sunt et accusantium perspiciatis veniam,
          ratione nostrum dicta alias atque similique labore quisquam cumque
          porro praesentium voluptatibus repudiandae quas. Repudiandae non
          recusandae saepe! Voluptates odio quam tenetur fugit odit explicabo
          voluptas veritatis, nam nisi? Non perferendis quos quo dignissimos
          molestiae ratione qui maxime omnis nostrum possimus, vero ex,
          doloremque quod esse, minima iusto. Aperiam dolor cum quaerat rerum
          voluptatum labore hic eum a ut? Tenetur harum expedita numquam tempore
          ex quos, tempora quasi perspiciatis mollitia perferendis aut omnis
          laboriosam fugiat voluptates, aspernatur odit nostrum. Nemo reiciendis
          quaerat, nihil ut quos cumque hic minus itaque voluptatibus molestias
          quidem deleniti distinctio necessitatibus ex, fuga perspiciatis. Eos
          recusandae voluptatum beatae magni, nobis aliquam labore sint quae
          asperiores error?
        </div>
      </div>
    </div>
  );
};

export default Mail;
