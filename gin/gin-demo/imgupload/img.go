package main

import (
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// 路由：处理文件上传
	r.POST("/upload", func(c *gin.Context) {
		// 获取上传的文件
		file, err := c.FormFile("file")
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "No file received"})
			return
		}

		// 保存文件到服务器
		uploadPath := "./uploads/"
		err = c.SaveUploadedFile(file, filepath.Join(uploadPath, file.Filename))
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file"})
			return
		}

		// 返回成功的响应
		c.JSON(http.StatusOK, gin.H{
			"message": "File uploaded successfully",
			"filename": file.Filename,
		})
	})

	// 启动服务器
	r.Run(":8080")
}