package lk.ijse.spring.util;

import lk.ijse.spring.dto.ImageDTO;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Component
public class FileDownloadUtil {
    private Path foundFile = null;

    private void searchFile(Path path, String fileName) {
        foundFile = null;
        try {
            Files.list(path).forEach(file -> {
                if (file.getFileName().toString().startsWith(fileName)) {
                    System.out.println("file  found");
                    foundFile = file;
                    return;
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public org.springframework.core.io.Resource getFileAsResource(ImageDTO imageDTO) {

        String pathDirectory = null;
        Path path = null;
        String imageName = imageDTO.getImageId() + imageDTO.getImageView() + ".jpeg";
        switch (imageDTO.getImageType()) {

            case "car":
                pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\CarImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;

            case "licence":
                pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\LicenseImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;

            case "idCard":
                pathDirectory = "E:\\Dilan-Spring-Car-Rental\\Easy-Car-Rental-React\\Back-End\\src\\main\\resources\\static\\IdCardImage";
                path = Paths.get(pathDirectory);
                searchFile(path, imageName);
                break;
        }

        try {
            if (foundFile != null) {
                return new UrlResource(foundFile.toUri());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        return null;
    }
}
