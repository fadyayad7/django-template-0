from datetime import datetime
from django.test import TestCase
from .models import Note


# Create your tests here.
class TestNotes(TestCase):
    def test_can_get_notes(self):
        note = Note(content="note1")
        note.save()
        note = Note(content="note2")
        note.save()
        self.assertEquals(Note.objects.all().count(), 2)
        self.assertEquals(Note.objects.all().first().content, 'note1')


