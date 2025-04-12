import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import { styles } from "../../features/profile/styles";
import { Comment } from "../../features/profile/types";
import { fetchComments } from "../../features/profile/comments";
import { renderStars } from "../../features/utils";

export default function ProfileScreen(): JSX.Element {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchComments().then(data => {
      setComments(data);
      setLoading(false);
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.name}>STIPE • <Text style={styles.stars}>{renderStars(5)}</Text>
        </Text>

        <Text style={styles.label}>Verification status:</Text>
        <Text style={styles.value}>completed</Text>

        <Text style={styles.label}>Comments:</Text>

        {loading ? (
          <ActivityIndicator size="small" color="#888" style={{ marginTop: 10 }} />
        ) : comments.length === 0 ? (
          <Text style={styles.commentText}>No comments yet.</Text>
        ) : (
          comments.map((comment) => (
            <View key={comment.id} style={styles.commentBlock}>
              <Text style={styles.commentHeader}>
                {comment.author} • <Text style={styles.stars}>{renderStars(comment.rating)}</Text>
              </Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}