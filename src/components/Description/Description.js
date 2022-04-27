import React from "react";
import styled from "styled-components";
const Description = () => {
  return (
    <Container>
      <SubTitle>Description</SubTitle>
      <Paragraph>Garansi Resmi Rexus 1 Tahun.</Paragraph>

      <Paragraph>Rexus Pro Gaming Gamepad GX2</Paragraph>

      <Paragraph>
        Professional Game Console I Easy Handle I Multiple Connection Devices -
        Konsol dapat dikoneksikan dengan perangkat Android/PC/PS3 - Compatible
        sampai Android 7 (nougat) - Mendukung kabel USB On The Go (OTG) -
        Dilengkapi kabel yang kuat sepanjang1,5 meter kabel USB - Didukung fitur
        Turbo yang mengoptimalkan aksi Anda saat bermain game. - Terbuat dari
        material berkualitas yang awet. - Dilengkapi driver software untuk
        mengoneksikan konsol dengan perangkat terdukung.
      </Paragraph>

      <Paragraph>
        Rexus Pro Gaming Gamepad GX2 merupakan gamepadkonsol yang bisa
        diaplikasikan dengan perangkat Android, PC, dan Playstation 3 yang sudah
        didukung fitur USB On The Go (OTG). Sambungkan konsol ini dengan
        perangkat game Anda dan nikmati sensasi bermain yang lebih menyenangkan.
      </Paragraph>

      <Paragraph>
        Fitur Turbo Turbo adalah tombol semi otomatis yang membuat beberapa aksi
        hanya dengan menekan satu tombol dalam waktu lama. Turbo sangat membantu
        dalam game perang atau menembak sehingga memungkinkan Anda menembak
        hanya dengan sekali menekan tombol sehingga jari-jari takkan mudah
        lelah.
      </Paragraph>

      <Paragraph>
        Kendali Nyaman Dengan ukuran160 x 104 x 159 mm, gamepad ini disesuaikan
        dengan ukuran telapak tangan orang Asia. Ukuran yang proporsional itu
        dikombinasikan dengan berat perangkat yang ideal, yaitu sekitar 189
        Gram. Dimensi yang ideal itu akan membuat pengendalian dengan gamepad
        ini menjadi sangat nyaman dan presisi.
      </Paragraph>

      <Paragraph>
        Multi Koneksi Rexus Pro Gaming Gamepad GX2 bisa dikoneksikan dengan
        semua perangkat Android, PC, dan Playstation 3 yang sudah dilengkapi USB
        On The Go (OTG). Dengan mendukung USB OTG, berarti perangkat tersebut
        berfungsi sebagai "host'' atau "master" atas aktivasi yang dilakukan.
      </Paragraph>
    </Container>
  );
};

export default Description;

export const SubTitle = ({ children }) => {
  return <SubtitleSc>{children}</SubtitleSc>;
};

const Paragraph = ({ children }) => {
  return <ParagraphSc>{children}</ParagraphSc>;
};

const Container = styled.div`
  grid-area: description;
  padding: 0px 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const SubtitleSc = styled.span`
  font-size: 16px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  color: rgba(49, 53, 59, 0.96);
`;

const ParagraphSc = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: rgba(49, 53, 59, 0.96);
`;
